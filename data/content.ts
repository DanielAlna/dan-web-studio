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
  title: "Websites and web apps,",
  titleAccent: "built with care.",
  offer: ["Custom Websites", "Web Apps", "AI Development"],
  intro:
    "DAN Web Studio builds WordPress sites, React and Next.js apps, and AI features for businesses. AI tools speed up the work, and every change is reviewed by hand before it goes live.",
};

export const services = [
  {
    title: "Custom websites",
    body: "Company sites, brand sites, and online stores on WordPress. Custom themes and blocks, so your team can edit content without breaking the design.",
    stack: ["WordPress", "WooCommerce", "Gutenberg"],
  },
  {
    title: "Web apps",
    body: "Dashboards, portals, and internal tools built with React and Next.js. Fast, secure, and ready to grow with your business.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "AI development",
    body: "AI features for your site or tools, like an assistant that answers questions from your own content, or automations that save your team time.",
    stack: ["AI assistants", "Automation", "Integrations"],
  },
  {
    title: "Care and updates",
    body: "Updates, speed and security fixes, and content changes for sites that are already live. Help when you need it, without a long contract.",
    stack: ["Maintenance", "Speed", "Security"],
  },
];

export const aiNote = {
  label: "How the work gets done",
  title: "AI-assisted, reviewed by a person",
  body: "Tools like Claude Code and Cursor handle repetitive work, so more of your budget goes to the parts that matter. Every change is checked by hand before it reaches your site.",
};

export const steps = [
  { title: "Talk", body: "A short call about your goals, your users, and what you have today." },
  { title: "Plan", body: "A written scope and a time estimate, so there are no surprises." },
  { title: "Build", body: "Regular updates and a preview link, so you can see progress and give feedback." },
  { title: "Launch and support", body: "Go live, then ongoing updates and fixes when you need them." },
];

export const billing = {
  lead: "Billed by the hour, with an estimate up front.",
  body: "You pay for the time the work takes, and you get a clear breakdown with every invoice.",
};

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
    body: "Corporate website for an international defense technology company, with investor relations, press releases, and careers." },
  { id: "wizer", name: "Wizer", kind: "page", shots: 3,
    body: "Marketing website for a consumer research company, with product pages, a case study, and lead forms." },
  { id: "logon", name: "Log-On", kind: "page", shots: 4,
    body: "Careers site for a software company, with job search, open positions, and an application form." },
  { id: "naturalformula", name: "Natural Formula", kind: "mockup", shots: 1,
    body: "Brand website for a professional hair care line, with a product catalog, how-to guides, and a country selector." },
  { id: "artjudaica", name: "Art Judaica", kind: "page", shots: 3,
    body: "Online store for Judaica gifts sold abroad, with wholesale accounts and a supplier ordering system." },
  { id: "amazingday", name: "Amazing Day", kind: "mockup", shots: 1,
    body: "Store for personalized planners, where customers design their own planner online." },
  { id: "sano", name: "Sano", kind: "page", shots: 3,
    body: "Brand site for a large household products company, with product categories, a blog, and promotions." },
  { id: "teka", name: "Teka Israel", kind: "mockup", shots: 1,
    body: "Website for an international kitchen appliance brand, with a full-screen slider and product categories." },
  { id: "careline", name: "Careline", kind: "page", shots: 3,
    body: "Online store for cosmetics and fragrance brands, with a large catalog and product listings." },
];

export const workIntro =
  "A selection of websites built for clients, from defense technology to consumer brands and online stores. Click a site to see more screenshots.";

export const founder = {
  name: "Daniel Al Nafutshy",
  role: "Founder",
  paragraphs: [
    "Daniel founded DAN Web Studio in Israel, where it built websites for companies like Elbit Systems and Wizer, and brought the business with him to Columbia, Maryland. He has more than ten years of experience as a full stack developer, including engineering roles at Log-On and AppsFlyer.",
    "He cares about how a site feels to use, down to the small details. Every project starts with a conversation with him, and he stays involved through launch.",
  ],
};

export const projectTypes = [
  "A new website",
  "A web app or internal tool",
  "An AI feature or automation",
  "Updates to an existing site",
  "Not sure yet",
];
