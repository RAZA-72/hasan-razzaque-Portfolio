import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const {
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = "465",
  SMTP_SECURE = "true",
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM_NAME = "Hasan Portfolio",
  MAIL_TO,
  PORT = "5000",
} = process.env;

app.use(express.json({ limit: "20kb" }));

/* ---------- SMTP transport (credentials come ONLY from .env) ---------- */
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === "true",
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

const smtpConfigured =
  SMTP_USER && SMTP_PASS && !SMTP_PASS.startsWith("PASTE_");

if (smtpConfigured) {
  transporter
    .verify()
    .then(() => console.log(`[SMTP] Connected as ${SMTP_USER} via ${SMTP_HOST}:${SMTP_PORT}`))
    .catch((e) => console.error("[SMTP] Verification failed:", e.message));
} else {
  console.warn("[SMTP] Not configured — put your Gmail App Password in .env (SMTP_PASS)");
}

/* ---------- tiny in-memory rate limit: 5 msgs / 15 min / IP ---------- */
const hits = new Map();
function rateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000);
  if (recent.length >= 5) {
    return res.status(429).json({ message: "Too many messages. Please try again later." });
  }
  recent.push(now);
  hits.set(ip, recent);
  next();
}

const esc = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

app.get("/api/health", (_req, res) => res.json({ ok: true, smtpConfigured: Boolean(smtpConfigured) }));

app.post("/api/contact", rateLimit, async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  if (website) return res.json({ ok: true }); // honeypot: silently drop bots

  if (![name, email, subject, message].every((v) => typeof v === "string" && v.trim())) {
    return res.status(400).json({ message: "All fields are required." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 120) {
    return res.status(400).json({ message: "Please enter a valid email." });
  }
  if (name.length > 80 || subject.length > 150 || message.length > 5000) {
    return res.status(400).json({ message: "Message is too long." });
  }
  if (!smtpConfigured) {
    return res.status(503).json({ message: "Mail service is not configured yet." });
  }

  try {
    // 1) notification to Hasan
    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="margin:0 0 12px">New portfolio message</h2>
        <p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Subject:</b> ${esc(subject)}</p>
        <div style="padding:12px;border-left:4px solid #2563eb;background:#f4f6fb;white-space:pre-wrap">${esc(message)}</div>
      </div>`,
    });

    // 2) auto-reply to the visitor (non-blocking failure)
    transporter
      .sendMail({
        from: `"Hasan Md Razzaque" <${SMTP_USER}>`,
        to: email,
        subject: "Thanks for contacting me — Hasan",
        text: `Hi ${name},\n\nThanks for your message. I have received it and will reply soon.\n\n— Hasan Md Razzaque`,
      })
      .catch((e) => console.warn("[SMTP] auto-reply failed:", e.message));

    return res.json({ ok: true });
  } catch (err) {
    console.error("[SMTP] send failed:", err.message);
    return res.status(500).json({ message: "Could not send message. Please try again later." });
  }
});

/* ---------- production: serve the built React app ---------- */
const dist = path.join(__dirname, "../dist");
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get(/^(?!\/api).*/, (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

app.listen(Number(PORT), () => console.log(`[server] http://localhost:${PORT}`));
