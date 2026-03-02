export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Industries', href: '#services' },
  { name: 'Services', href: '#services' },
  { name: 'Newsroom', href: '#news' },
  { name: 'Careers', href: 'https://careers.coforge.com/' },
];

export const SERVICES = [
  {
    title: 'Artificial Intelligence',
    desc: 'Transforming businesses with Quasar AI, Agentic AI, and Machine Learning solutions.',
    icon: 'BrainCircuit'
  },
  {
    title: 'Digital Engineering',
    desc: 'Modernizing legacy applications and building cloud-native solutions for the future.',
    icon: 'Code2'
  },
  {
    title: 'Data & Analytics',
    desc: 'Turning data into actionable insights with Data Cosmos and advanced analytics.',
    icon: 'Database'
  },
  {
    title: 'Cloud Services',
    desc: 'Secure, scalable, and efficient cloud migration and management services.',
    icon: 'Cloud'
  },
  {
    title: 'Automation',
    desc: 'Intelligent automation to streamline operations and reduce costs.',
    icon: 'Bot'
  },
  {
    title: 'BPS',
    desc: 'Business Process Solutions driving operational excellence across industries.',
    icon: 'Briefcase'
  }
];

export const NEWS_ITEMS = [
  {
    title: "Coforge Expands CodeInsightAI",
    desc: "New Agentic AI capabilities for enterprise modernization and legacy code refactoring.",
    image: "https://picsum.photos/seed/coforge1/400/300"
  },
  {
    title: "Partnership with Innovaccer",
    desc: "Accelerating AI transformation in Healthcare to improve patient outcomes.",
    image: "https://picsum.photos/seed/coforge2/400/300"
  },
  {
    title: "Robust Q3 Performance",
    desc: "Revenue up 5.1% QoQ, 28.5% YoY. Continued growth in banking and travel sectors.",
    image: "https://picsum.photos/seed/coforge3/400/300"
  },
  {
    title: "Launch of EvolveOps.AI",
    desc: "Agentic AI-powered IT operations platform for enhanced business resiliency.",
    image: "https://picsum.photos/seed/coforge4/400/300"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Coforge really understands us. They understand our values and our business needs.",
    author: "Nicki Tang",
    role: "CIO, Tokio Marine HCC International"
  },
  {
    quote: "Coforge was fundamental in partnering with IAG to deliver our requirement of 290 initiatives within two months.",
    author: "John Gibbs",
    role: "Group CIO, International Airlines Group"
  },
  {
    quote: "A reliable partner whom I can trust. Their commitment to excellence makes them a valuable asset.",
    author: "Nick Scully",
    role: "Head of Procurement, Tokio Marine HCC"
  }
];

// Context for Gemini
export const COFORGE_CONTEXT = `
You are an AI assistant for Coforge (formerly NIIT Technologies), a global digital services and solutions provider.
Your goal is to answer visitor questions about Coforge professionally, concisely, and helpfully.

Key Information about Coforge:
- **Overview:** 7th Largest Indian IT Service Firm. Focuses on the intersection of deep domain expertise and emerging technologies.
- **Key Industries:** Banking & Financial Services, Travel, Transportation & Hospitality, Insurance, Healthcare, Public Sector, Retail & CPG.
- **Key Services:** 
    - AI & AI Platforms (Quasar AI, Forge-X, EvolveOps AI).
    - Digital Engineering (App modernization, Product Engineering).
    - Data & Analytics (Data Cosmos).
    - Cloud Services & Cybersecurity.
    - Business Process Solutions (BPS).
- **Recent News:**
    - Launched 'The Coforge Public Library' in Hyderabad/Noida for free learning.
    - Partnered with Innovaccer for Healthcare AI.
    - Acquiring Encora (subject to approval).
    - Strong financial growth (Revenue up 28.5% YoY).
- **Culture:** Focused on "Engage with the emerging". High employee retention.

Tone: Professional, innovative, helpful, and polite.
If asked about stock prices or specific real-time financial advice, disclaim that you are an AI and refer them to the Investor Relations page.
If asked for contact, direct them to the "Contact Us" section.
`;
