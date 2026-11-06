// Public files live under the site's base path on GitHub Pages.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Akshita Choudhury',
  role: 'Product builder · CS + Business',
  location: 'Toronto, ON',
  email: 'a49choud@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/akshita-choudhury-961807217/',
  github: 'https://github.com/akshu1906',
  resume: asset('resume.pdf'),
};

export type Track = 'product' | 'engineering';

export type Role = {
  company: string;
  url: string;
  title: string;
  period: string;
  track: Track;
  current?: boolean;
  highlight: { value: string; label: string };
  companyAbout: string;
  work: string;
  tags: string[];
};

// Most recent first — mirrors the résumé.
export const experience: Role[] = [
  {
    company: 'PAAS Research',
    url: 'https://www.paasresearch.com/',
    title: 'AI Product Builder (Part-Time)',
    period: 'Jul 2026 — Present',
    track: 'product',
    current: true,
    highlight: { value: '6–7 wks → 1 wk', label: 'client onboarding time' },
    companyAbout: 'A B2B market-research startup helping businesses run, match and analyze surveys at scale.',
    work: 'I built a hybrid AI platform to automate survey mapping, using Luna and OpenAI models alongside heuristics, cutting manual effort by 74%. I also own the roadmap for multilingual matching and LLM review, and mentor new interns.',
    tags: ['LLMs', 'Workflow automation', 'B2B', 'Roadmapping'],
  },
  {
    company: 'Revvity Health',
    url: 'https://www.revvity.com/ca-en',
    title: 'AI Product Manager Intern',
    period: 'Sep 2025 — Dec 2025',
    track: 'product',
    highlight: { value: '3 wks → 3 days', label: 'diagnostic report turnaround' },
    companyAbout: 'A global life-sciences and diagnostics company and a leader in newborn screening, helping labs detect rare disorders early.',
    work: 'I led the 0-to-1 MVP of an AI-powered newborn report generator with human-in-the-loop review, and drove discovery across 6+ global teams to deliver diagnostic AI agents that reached 33% company adoption in 6 months.',
    tags: ['0→1', 'AI agents', 'Healthcare', 'Stakeholder alignment'],
  },
  {
    company: 'theScore',
    url: 'https://www.thescore.com/',
    title: 'Product Manager Intern',
    period: 'May 2025 — Aug 2025',
    track: 'product',
    highlight: { value: '+35%', label: 'game discoverability' },
    companyAbout: 'A Toronto-based sports media and betting company behind theScore app and theScore Bet.',
    work: 'I supported the Hollywood Casino app launch through UAT and regulatory approval, then drove the Slots Tagging and Bookmarks roadmap from research and data to make games easier to discover and personalize.',
    tags: ['Consumer', 'Launch', 'UAT', 'Personalization'],
  },
  {
    company: 'Purolator',
    url: 'https://www.purolator.com/en',
    title: 'Product Manager Intern',
    period: 'Sep 2024 — Dec 2024',
    track: 'product',
    highlight: { value: '$27M', label: 'projected 2025 revenue, bundling initiative' },
    companyAbout: 'One of Canada\'s largest courier and freight companies, serving businesses and consumers across North America.',
    work: 'I secured approval and funding for a bundling initiative projected at $27M for 2025, improved order tracking on the freight site, and used zero-shot NLP to turn 5K+ sales comments into customer insights.',
    tags: ['B2B', 'Business case', 'NLP', 'Logistics'],
  },
  {
    company: 'Ford',
    url: 'https://www.ford.ca/',
    title: 'Software Engineering Intern',
    period: 'May 2023 — Aug 2023',
    track: 'engineering',
    highlight: { value: '−30%', label: 'infotainment crashes' },
    companyAbout: 'One of the world\'s largest automakers, building connected infotainment systems across its vehicle lineup.',
    work: 'I raised infotainment regression test success to 98% using C++, Bash, QNX and ADB, and led crash triage across vehicle models with 6+ teams to cut crashes by 30%.',
    tags: ['C++', 'QNX', 'Bash', 'Triage'],
  },
  {
    company: 'Scotiabank',
    url: 'https://www.scotiabank.com/ca/en/personal.html',
    title: 'Android Developer Intern',
    period: 'Sep 2022 — Dec 2022',
    track: 'engineering',
    highlight: { value: '+17%', label: 'iTrade engagement' },
    companyAbout: 'One of Canada\'s Big Five banks; Scotia iTRADE is its self-directed online investing platform.',
    work: 'I maintained the iTrade Android app and cut bugs by 20%, and built dark mode and advanced charts in Kotlin with the design team, lifting engagement by 17%.',
    tags: ['Kotlin', 'Android', 'Figma'],
  },
];

export const stats = [
  { value: '2+ yrs', label: 'of professional work experience' },
  { value: '6', label: 'industries, from banking to healthcare' },
  { value: '12+', label: 'cross-functional teams partnered with' },
  { value: 'Eng → PM', label: 'from writing code to vibe coding & owning product' },
];

export const featured = {
  name: 'Travelly',
  kind: 'AI travel app · Prototype',
  problem:
    'TikTok users save travel videos for "later" but rarely go back — the saves pile up, get mixed together, and turning them into a plan means looking up every spot by hand.',
  solution:
    'Travelly turns saved travel TikToks into an interactive map of every recommended place, with time and cost estimates and shared trip boards for planning with friends.',
  process:
    'We started from user interviews and observation, built a persona around Gen Z travelers, then iterated on navigation, accessible map pins and item customization. We also outlined a freemium go-to-market with creator and tourism-board partnerships.',
  features: ['Interactive map', 'Time + cost estimator', 'Shared trip boards'],
  tags: ['User research', 'Personas', 'Prototyping', 'Go-to-market'],
  video: asset('travelly-demo.mp4'),
  poster: asset('travelly-poster.jpg'),
  slides: asset('travelly-slides.pdf'),
};

export const projects = [
  {
    name: 'FOODFIX',
    kind: 'Product design sprint',
    description:
      'A market-inclusive personalized nutrition app for the 78% of Canadian home cooks underserved by existing tools — recipe generation, real-time grocery scanning and community features for diverse dietary needs.',
    tags: ['User research', 'Figma', 'Prototyping'],
    href: 'https://bit.ly/3YcU9KH',
    linkLabel: 'View prototype',
  },
  {
    name: 'YADA',
    kind: 'Yet Another Drawing App',
    description:
      'A real-time, multi-user whiteboard built in Kotlin for remote learning and ideation. Shipped customizable backgrounds and other features from user feedback, raising satisfaction by 30%.',
    tags: ['Kotlin', 'Real-time', 'User feedback'],
    href: 'https://github.com/akshu1906/YADA/tree/github',
    linkLabel: 'View code',
  },
];

export const skills = {
  'Product & strategy': ['Product roadmapping', 'Market research', 'Business requirements', 'Technical documentation', 'Scrum / Agile', 'JIRA', 'Figma'],
  Technical: ['Python', 'SQL', 'Kotlin', 'C / C++', 'Bash', 'LLM workflows'],
};

export const awards = [
  { name: 'Faculty of Mathematics Excellence Award', detail: '$20,000 · awarded to the top 10 students from India via a competitive math exam' },
  { name: 'Grace Hopper Scholar', detail: 'The largest conference for women+ in technology' },
  { name: 'University of Waterloo Presidential Scholarship', detail: 'For entering with a 90%+ average' },
];
