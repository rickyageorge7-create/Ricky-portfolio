const publicBasePath =
  process.env.NODE_ENV === "production" ? "/ricky-portfolio" : "";

export const portfolioImages = {
  profile: `${publicBasePath}/ricky.jpg`,
  heroBackground: `${publicBasePath}/hero-bg.jpg`,
  rigza: `${publicBasePath}/rigza.png`,
  taco: `${publicBasePath}/taco.png`,
  letseat: `${publicBasePath}/letseat.png`,
  gadgets: null,
  attendance: null,
  nta: null,
  homelab: null,
};

export const site = {
  name: "Ricky A. George",
  title: "Ricky A. George | Liberia Tech Builder",
  tagline: "IT Student & Web Developer",
  oneLineHeadline:
    "IT student and web developer building useful tech products from Liberia.",
  story:
    "I started learning web development by building projects and solving small real problems, and that curiosity kept growing. I run One Stop Gadgets while studying Information Technology, and I am driven by the idea of building tech products and businesses that create value in Liberia.",
  fiveYearVision:
    "In five years, I want to graduate from Starz University, run a growing tech company in Liberia, and keep building products that help people and businesses use technology more effectively.",
  strengths: [
    "HTML",
    "CSS",
    "GitHub Pages",
    "Frontend design",
    "Phone repair",
    "Business problem solving",
  ],
  learning: [
    "JavaScript",
    "React",
    "Next.js",
    "Linux",
    "Docker",
    "Networking",
    "Windows Server",
  ],
  location: "Monrovia, Liberia",
  age: 20,
  email: "rickyageorge7@gmail.com",
  phonePrimary: "+231 775 399 168",
  phoneSecondary: "+231 555 112 922",
  url: "https://rickyageorge7-create.github.io/ricky-portfolio/",
  yearsLearning: null,
  rotatingWords: ["web apps", "phone fixes", "gadgets", "ideas"],
  heroChips: ["RIGZA", "Next.js", "Liberia"],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Building", href: "#building" },
  { label: "Contact", href: "#contact" },
];

export const techStack = [
  "Next.js",
  "React",
  "CSS",
  "GitHub Pages",
  "Linux",
  "Docker",
  "Networking",
  "Windows Server",
];

export const skillGroups = [
  {
    title: "Confident skills",
    items: site.strengths,
  },
  {
    title: "Currently learning",
    items: site.learning,
  },
  {
    title: "Business & Product",
    items: [
      "Resale",
      "Repair",
      "Problem solving",
      "Research",
      "Testing",
      "Product thinking",
    ],
  },
  {
    title: "Tools",
    items: [
      "GitHub",
      "VS Code",
      "Terminal",
      "Debugging",
      "Documentation",
      "Deployment",
    ],
  },
];

export const projects = [
  {
    name: "RIGZA (RIGZ-STARZ)",
    shortName: "RIGZA",
    category: "Student companion web app",
    description:
      "RIGZA is a student companion web app for Starz University that helps students access key campus information in one place. It is my main project and the featured app in this portfolio.",
    tools: ["Next.js", "React", "CSS", "GitHub Pages"],
    link: "https://rickyageorge7-create.github.io/RIGZ-STARZ/",
    screenshot: "rigza-screenshot.png",
    image: portfolioImages.rigza,
    video: null,
    featured: true,
    visual: "RIGZA",
  },
  {
    name: "Auto attendance app",
    shortName: "Attendance",
    category: "Student check-in system",
    description:
      "This app allows students to check in with their student ID at the gate and in each class. It is still in progress and designed to make classroom attendance more organized.",
    tools: ["Next.js", "Student ID flow", "Web app design"],
    link: "#",
    screenshot: "auto-attendance-screenshot.png",
    image: portfolioImages.attendance,
    featured: false,
    visual: "ID",
  },
  {
    name: "One Stop Gadgets",
    shortName: "Gadgets",
    category: "Phone and electronics business",
    description:
      "One Stop Gadgets is my phone and electronics resale and repair business. It helps me combine practical tech skills with real business experience in Liberia.",
    tools: ["Repair", "Resale", "Customer service", "Electronics"],
    link: "#",
    screenshot: "one-stop-gadgets-screenshot.png",
    image: portfolioImages.gadgets,
    featured: false,
    visual: "OSG",
  },
  {
    name: "NTA transit website",
    shortName: "NTA",
    category: "Concept transport website",
    description:
      "A concept website for Liberia's National Transit Authority, focused on transit information and easier public access to transport details. It is a design concept for public service communication.",
    tools: ["UI design", "Web layout", "Responsive design"],
    link: "#",
    screenshot: "nta-transit-screenshot.png",
    image: portfolioImages.nta,
    featured: false,
    visual: "NTA",
  },
  {
    name: "Little Taco Shop",
    shortName: "Taco",
    category: "Multi-page restaurant website",
    description:
      "Little Taco Shop is a multi-page restaurant website designed to present menu and brand information clearly. It was built as a practical frontend exercise in website structure and layout.",
    tools: ["HTML", "CSS", "Responsive website"],
    link: "https://rickyageorge7-create.github.io/Taco/",
    screenshot: "little-taco-shop-screenshot.png",
    image: portfolioImages.taco,
    featured: false,
    visual: "TACO",
  },
  {
    name: "Let's Eat",
    shortName: "Let's Eat",
    category: "Website",
    description: "Visit the live page or jump to its FAQ section.",
    tools: [],
    link: "https://rickyageorge7-create.github.io/-lets-eat/#faq",
    screenshot: "lets-eat-screenshot.png",
    image: portfolioImages.letseat,
    featured: false,
    visual: "FAQ",
  },
  {
    name: "Homelab",
    shortName: "Homelab",
    category: "Self-hosted lab",
    description:
      "This homelab is a self-hosted media and learning environment for Linux, Docker and networking. It is where I practice system setup, experimentation and infrastructure learning.",
    tools: ["Linux", "Docker", "Networking", "Self-hosting"],
    link: "#",
    screenshot: "homelab-screenshot.png",
    image: portfolioImages.homelab,
    featured: false,
    visual: "LAB",
  },
];

export const stats = [
  { label: "Age", value: site.age },
  { label: "Projects", value: projects.length },
  { label: "Years learning", value: site.yearsLearning },
  { label: "School", value: "BIT" },
  { label: "Location", value: "Monrovia" },
];

export const services = [
  {
    title: "Website design",
    description: "Responsive websites shaped around your goals and content.",
    whatsappText: "Hi Ricky, I would like to discuss website design.",
  },
  {
    title: "Phone unlocking and repair",
    description: "Practical help with phone unlocking and repair needs.",
    whatsappText:
      "Hi Ricky, I would like to ask about phone unlocking or repair.",
  },
  {
    title: "Tech help for students",
    description: "Friendly help with everyday student technology questions.",
    whatsappText: "Hi Ricky, I would like to ask about tech help for students.",
  },
];

export const currentlyBuilding = [
  { title: "Auto attendance app", progress: null },
  { title: "Homelab", progress: null },
];

export const finalCallToAction = {
  title: "Have a practical tech idea?",
  description: "Let’s talk about what you need and how I can help.",
  whatsappText: "Hi Ricky, I would like to discuss a tech project.",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/rickyageorge7-create" },
  { label: "Instagram", href: "https://www.instagram.com/ric_ky_george/" },
  { label: "TikTok", href: "https://www.tiktok.com/@rickytech4" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
];

export const contactDetails = {
  email: "rickyageorge7@gmail.com",
  whatsapp: "https://wa.me/231775399168",
  phonePrimary: "+231 775 399 168",
  phoneSecondary: "+231 555 112 922",
};
