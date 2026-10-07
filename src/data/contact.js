import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "hasanrazzaque123@gmail.com",
    href: "mailto:hasanrazzaque123@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+91 9106282104",
    href: "tel:+919106282104",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Surat · Delhi · Noida · Pune",
    href: "#",
  },
];

export const socialLinks = [
  {
    icon: FiGithub,
    name: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: FiLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hasan-md-razzaque-4984861aa",
  },
];

export default contactInfo;