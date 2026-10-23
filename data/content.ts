// All site text lives here, so content changes don't touch the components.

export const site = {
  name: "DAN Web Studio",
  location: "Columbia, Maryland",
  linkedin: "https://www.linkedin.com/company/136624081/",
  // Shown only if the contact form can't send
  fallbackEmail: "daniel.alnafut@gmail.com",
};

export const nav = [
  { id: "services", label: "Services" },
  { id: "process", label: "How it works" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  status: "Columbia, Maryland · Taking new projects",
  title: "Custom websites and software",
  titleAccent: "built around your business.",
  offer: ["Websites", "Web Apps", "Internal Tools"],
  intro:
    "Websites, applications, and internal tools that solve real business challenges, whether you're launching something new or improving what you already have. Behind every project is more than a decade of hands-on software engineering experience.",
};

export const services = [
  {
    title: "Custom websites and WordPress",
    body: "A new company website, or a WordPress site that's become hard to manage or extend. We build custom themes, blocks, and functionality around your business, so your team can update content without calling a developer for every change.",
    stack: ["WordPress", "WooCommerce", "Custom functionality"],
  },
  {
    title: "Web applications and internal tools",
    body: "When off-the-shelf software doesn't fit the job, a custom application often will: internal dashboards, employee portals, approval workflows, and tools that connect existing systems. Our experience covers both production business applications and early-stage products.",
    stack: ["React", "Next.js", "APIs"],
  },
  {
    title: "Practical AI guidance",
    body: "Not sure whether AI belongs in your business? We'll look at how your team works and give you an honest view of where it could help and where a simpler solution would do. Any next steps are scoped with you.",
    stack: ["AI assessment", "AI-assisted development"],
  },
  {
    title: "Maintenance and improvements",
    body: "Updates, bug fixes, performance and security improvements, and new features for websites and applications that are already live. We can set up ongoing maintenance around what your project needs.",
    stack: ["Updates", "Fixes", "New features"],
  },
];

export const aiNote = {
  label: "How the work gets done",
  title: "Experienced engineering, supported by modern tools",
  body: "AI-assisted development tools help with parts of the work. The architecture, code review, testing, and technical decisions rely on experienced engineering judgment.",
};

export const steps = [
  { title: "Talk", body: "We learn about your business, your users, and what isn't working today." },
  { title: "Plan", body: "Together we agree on a practical scope, the technical approach, and priorities, with simpler options considered where they make sense." },
  { title: "Build", body: "Development and testing, with regular progress updates and room for your feedback along the way." },
  { title: "Launch and support", body: "After launch, you choose what comes next: updates, maintenance, or further development." },
];

export type Client = {
  id: string; // image files are /img/{id}-1.jpg, /img/{id}-2.jpg, ...
  name: string;
  body: string;
  shots: number;
  // "page" = a flat screenshot (gets a frame), "mockup" = device mockup on white
  kind: "page" | "mockup";
};

export const clients: Client[] = [
  { id: "elbit", name: "Elbit Systems", kind: "mockup", shots: 1,
    body: "Corporate website for an international defense technology company, with sections for its lines of business, investor relations, press releases, and careers." },
  { id: "wizer", name: "Wizer", kind: "page", shots: 3,
    body: "Marketing website for an AI-based consumer research company, with a product overview, a customer case study, and prompts to contact the sales team." },
  { id: "logon", name: "Log-On", kind: "page", shots: 4,
    body: "Hebrew careers site for a software company, with job listings by category, career articles, and an online application form." },
  { id: "naturalformula", name: "Natural Formula", kind: "mockup", shots: 1,
    body: "Brand website for a professional hair care line, with a product catalog, straightening and curl guides, and a country selector." },
  { id: "artjudaica", name: "Art Judaica", kind: "page", shots: 3,
    body: "Wholesale-only online store for Judaica gifts, with trade registration and sign-in, a large category menu, and published ordering and shipping terms." },
  { id: "amazingday", name: "Amazing Day", kind: "mockup", shots: 1,
    body: "Hebrew online store for personalized planners, where customers choose a planner and design their own before ordering." },
  { id: "sano", name: "Sano", kind: "page", shots: 3,
    body: "Hebrew brand website for a major household products company, with product categories, articles and how-to videos, and a language switcher." },
  { id: "teka", name: "Teka Israel", kind: "mockup", shots: 1,
    body: "Hebrew website for an international kitchen appliance brand, built around full-screen product imagery." },
  { id: "careline", name: "Careline", kind: "page", shots: 3,
    body: "Hebrew online store for cosmetics and fragrance brands, with brand menus, sale pricing, and a shopping cart." },
];

export const workIntro =
  "Selected website development projects spanning corporate websites, consumer brands, and online stores. Explore each project to see more of the work.";

export const founder = {
  name: "Daniel Al Nafutshy",
  role: "Founder",
  paragraphs: [
    "DAN Web Studio began in Israel and now operates from Columbia, Maryland. Founder Daniel Al Nafutshy brings more than a decade of software engineering experience, from commercial websites for established brands to production applications and technical leadership.",
    "That engineering depth is paired with experience in marketing and business strategy, so we plan each project around who will use the site or tool, how people will find it, and what it needs to accomplish.",
  ],
};

export const projectTypes = [
  "A new website",
  "A web app or internal tool",
  "Updates to an existing site",
  "Not sure yet",
];

// Self-reported ranges to understand a prospect's budget. Not prices or packages.
export const budgetRanges = [
  "$500–$1,500",
  "$1,500–$3,000",
  "$3,000–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "I'm not sure yet",
];
