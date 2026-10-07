const projects = [
  {
    id: 0,
    slug: "drdo-internal-software",
    featured: true,
    confidential: true,

    title: "DRDO — Internal Custom Software",

    category: "Internal Enterprise Software",

    type: "Internal",

    image: "/images/projects/drdo.png",

    shortDescription:
      "Internal custom software for DRDO built with Core PHP and CodeIgniter 4, with secure role-based access and automated SMTP email.",

    description:
      "Custom internal software developed for DRDO (Defence Research & Development Organisation), built with Core PHP and the CodeIgniter 4 framework on a MySQL database. The system is designed for secure intranet use, with role-based access, structured workflows, admin management and automated email notifications delivered through an authenticated SMTP service. Because this is an internal system, it is not publicly accessible and no live link is available.",

    role: "Full Stack Developer",

    client: "DRDO (via Milleniance Softnet Pvt. Ltd.)",

    duration: "2025 - Present",

    location: "Surat, Gujarat, India",

    technologies: [
      "Core PHP",
      "CodeIgniter 4",
      "MySQL",
      "SMTP",
      "JavaScript",
      "Bootstrap",
    ],

    features: [
      "Internal Custom Software Built to Organisation Needs",
      "Role-Based Access Control",
      "Secure Authentication & Session Handling",
      "Admin Management Panel",
      "Automated SMTP Email Notifications",
      "Environment-Based Configuration (.env)",
      "Validated Forms & Server-Side Security",
      "Responsive Interface",
    ],

    challenges: [
      "Delivering secure internal software with strict access control",
      "Combining Core PHP modules with the CodeIgniter 4 MVC architecture",
      "Keeping credentials out of source code using environment configuration",
      "Setting up reliable SMTP mail delivery with app-password authentication",
    ],

    screenshots: ["/images/projects/drdo.png"],

    github: "",

    live: "",
  },

  {
    id: 1,
    slug: "safari-x",
    type: "Full Stack",
    title: "Safari X",
    category: "Travel Booking Platform",
    image: "/images/projects/safarix.png",
    shortDescription:
      "MERN-style travel platform for flights, buses, cabs, hotels and guides with payments and four role-based dashboards.",
    description:
      "Safari X is a full-featured travel booking application supporting flight, bus, cab, hotel and guide bookings. The platform integrates secure payment gateways and multiple third-party APIs across all booking services, with four dedicated role-based dashboards for users, guides, cab providers and admins.",
    role: "Full Stack Developer",
    client: "Milleniance Softnet Pvt. Ltd.",
    duration: "2024 - Present",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "REST API", "Payment Gateway"],
    features: [
      "Flight, Hotel, Bus, Cab & Guide Booking",
      "Secure Payment Gateway",
      "Third-Party Travel API Integration",
      "Four Role-Based Dashboards",
      "Admin Dashboard",
    ],
    challenges: [
      "Integrating multiple third-party travel and payment APIs",
      "Designing four distinct role-based dashboards with tailored permissions",
      "Coordinating booking workflows across five service types",
    ],
    screenshots: ["/images/projects/safarix.png"],
    github: "",
    live: "",
  },

  {
    id: 2,
    slug: "datahub-microfinance",
    type: "Full Stack",
    title: "MFIN DataHub — Microfinance Platform",
    category: "Microfinance Data Platform",
    image: "/images/projects/mfin.png",
    shortDescription:
      "Microfinance data platform on Laravel and React with role-based login, permissions and live role-specific charts.",
    description:
      "DataHub is a microfinance platform built with a Laravel backend and a React.js frontend. It implements complex business logic, role-based login and permission-driven data access, along with dynamic graphs and data visualisations tailored to each user's role and permissions.",
    role: "Full Stack Developer",
    client: "Milleniance Softnet Pvt. Ltd.",
    duration: "2025 - Present",
    technologies: ["Laravel", "React", "MySQL", "REST API", "Charts"],
    features: [
      "Role-Based Login",
      "Permission-Driven Data Access",
      "Dynamic Graphs & Visualisations",
      "Complex Business Logic",
      "Responsive Dashboard",
    ],
    challenges: [
      "Implementing complex, permission-driven business logic",
      "Building role-specific data visualisations",
      "Integrating a Laravel backend with a React.js frontend",
    ],
    screenshots: ["/images/projects/mfin.png"],
    github: "",
    live: "",
  },

  {
    id: 3,
    slug: "nuvoco-zero-m",
    type: "Full Stack",
    title: "Nuvoco Zero M — Dealer Portal",
    category: "Role-Based OTP Portal",
    image: "/images/projects/nuvoco.png",
    shortDescription:
      "Portal with mobile-OTP login for four user roles — Dealer, ASM, SO and SR.",
    description:
      "A portal for Nuvoco Zero M where users sign in with a mobile number and OTP, choosing their role — Dealer, ASM, SO or SR — so each person gets the access that matches their position.",
    role: "Developer",
    client: "Milleniance Softnet Pvt. Ltd.",
    duration: "2024 - 2025",
    technologies: ["OTP Login", "Role-Based Access", "REST API"],
    features: [
      "Mobile Number + OTP Login",
      "Four Roles: Dealer, ASM, SO, SR",
      "Role-Based Access",
      "Responsive Interface",
    ],
    challenges: [
      "Secure OTP-based authentication",
      "Separating access and views for four user roles",
    ],
    screenshots: ["/images/projects/nuvoco.png"],
    github: "",
    live: "",
  },

  {
    id: 4,
    slug: "ngo-backend-server",
    type: "Backend",
    title: "NGO Backend Server",
    category: "Backend · REST API",
    image: "/images/projects/ngo.png",
    shortDescription:
      "Backend-only REST API server for an NGO management app, built on Express.js and MySQL.",
    description:
      "I built the complete backend for an NGO management application on Express.js. It provides secure authentication, role-based access and full CRUD REST APIs over a MySQL database, which the frontend consumes to manage organisational data centrally.",
    role: "Backend Developer",
    client: "Milleniance Softnet Pvt. Ltd.",
    duration: "2024 - 2025",
    technologies: ["Node.js", "Express.js", "MySQL", "REST API", "JWT"],
    features: [
      "Secure Authentication",
      "Role-Based Access Control",
      "Full CRUD REST APIs",
      "Centralised Data Management",
    ],
    challenges: [
      "Designing the backend and database from scratch",
      "Implementing secure, role-based data access",
      "Structuring clean, consistent REST endpoints",
    ],
    screenshots: ["/images/projects/ngo.png"],
    github: "",
    live: "",
  },

  {
    id: 5,
    slug: "deendayal-seva-ngo-website",
    type: "Internal",
    title: "Deendayal Seva NGO Website",
    category: "NGO Website & CMS",
    image: "/images/projects/deendayal.png",
    shortDescription:
      "Dynamic NGO website with admin-managed content and forms, built on CodeIgniter 4.",
    description:
      "A dynamic website for the Deendayal Seva NGO built with CodeIgniter 4, with admin-managed pages, validated forms and a management panel so the organisation can update content without a developer.",
    role: "Full Stack Developer",
    client: "Milleniance Softnet Pvt. Ltd.",
    duration: "2025",
    technologies: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap"],
    features: ["Dynamic Content Pages", "Admin Management Panel", "Validated Public Forms", "Responsive Layout"],
    challenges: ["Making every page editable from the admin panel", "Structuring clean MVC code in CodeIgniter 4"],
    screenshots: ["/images/projects/deendayal.png"],
    github: "",
    live: "",
  },
];

export default projects;
