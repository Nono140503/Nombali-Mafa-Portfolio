export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.replace(/^\/?(Nombali-Mafa-Portfolio\/)?/, '').replace(/^public\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export const projectsData = [
  {
    id: 'spaza-tycoon',
    number: '01',
    title: 'Spaza Tycoon',
    tagline: 'Web3 Business Simulator Built on Base Blockchain',
    description: 'A React TypeScript Web3 business simulator built on Base that gamifies the South African informal retail economy—transforming township "Hustle" into verifiable on-chain reputation, ERC-1155 NFTs, and real-world rewards.',
    category: 'Featured Web3 App',
    featured: true,
    bentoSize: 'hero',
    image: 'assets/spaza-tycoon.png',
    link: 'https://spaza-tycoon-monorepo.vercel.app/',
    github: 'https://github.com/Nono140503',
    technologies: ['Base L2', 'React', 'TypeScript', 'ERC-1155 NFTs', 'Tailwind CSS', 'Tone.js', 'Open-Meteo API'],
    metrics: [
      { label: 'Blockchain', value: 'Base L2' },
      { label: 'Token Standard', value: 'ERC-1155 NFTs' },
      { label: 'Core Features', value: 'Gasless Mints' }
    ],
    codeSnippet: `// Spaza Tycoon Web3 Engine (Built on Base L2)
import { useAccount, useContractWrite } from 'wagmi';

export function mintTownshipReputation(account: string, rep: number) {
  const tokenId = 101; // Spaza Reputation NFT
  return { chain: 'Base L2', account, tokenId, rep, status: 'VERIFIED' };
}`,
    caseStudy: {
      problem: 'A Web3 business simulator built on Base that gamifies the South African informal retail economy. Transform informal township "Hustle" into verifiable on-chain reputation and real-world rewards while onboarding users to Web3 through culturally grounded gameplay.',
      role: 'Lead Architect & Web3 Developer',
      timeline: '2025 - Present',
      challenge: 'Faithfully converting the Spaza Tycoon Web3 Hustle simulator into a modular React + TypeScript architecture with Vite, while integrating Tone.js audio, Open-Meteo live weather API, and Base L2 smart wallet gasless NFT minting.',
      build: 'Engineered with React 18, TypeScript, and Vite. Integrated Base L2 blockchain features including wallet connection, ERC-1155 NFT minting & gallery, gasless transactions, smart wallet support, Tone.js sound effects engine, and Open-Meteo real-time weather API.',
      outcome: 'Built a high-performance Web3 business game on Base that enables African township entrepreneurs to turn daily shop strategy (Bread, Coke, Milk, Benny) into verified digital reputation ($SPAZA / REP) on-chain.',
      reflection: 'Proved that combining familiar local culture, fast L2 infrastructure on Base, and gasless Web3 UX creates an engaging entry point for blockchain adoption across emerging markets.'
    }
  },
  {
    id: 'maternal-health-risk',
    number: '02',
    title: 'Maternal Health Risk Predictor',
    tagline: 'Predictive ML Model for Clinical Risk Classification',
    description: 'Built a Random Forest machine learning model that predicts maternal health risk levels with 81% accuracy using patient vital statistics and clinical markers.',
    category: 'Machine Learning',
    featured: true,
    bentoSize: 'prominent',
    image: 'assets/Maternity.png',
    link: 'https://colab.research.google.com/drive/1J6eP8YmSDnQNefUJ-s0rb3i34ARnMBgU?usp=sharing',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib'],
    metrics: [
      { label: 'Model Accuracy', value: '81%' },
      { label: 'Algorithm', value: 'Random Forest' },
      { label: 'Data Source', value: 'Clinical Data' }
    ],
    codeSnippet: `# Maternal Health Risk Classification Pipeline
from sklearn.ensemble import RandomForestClassifier

rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)
y_pred = rf_model.predict(X_test) # 81% accuracy`,
    caseStudy: {
      problem: 'High maternal mortality rates in underserved healthcare settings stem from delayed risk identification during prenatal consultations.',
      role: 'Machine Learning Developer',
      timeline: '2024 - 2025',
      challenge: 'Processing non-linear clinical indicators (systolic/diastolic BP, blood sugar, body temperature, age) while addressing class imbalances to prevent false negatives in high-risk classifications.',
      build: 'Utilized Python data science stack (Pandas, Scikit-learn, Seaborn). Performed hyperparameter tuning on Random Forest ensemble models, feature importance analysis, and cross-validation.',
      outcome: 'Achieved an 81% overall accuracy score and high recall for critical high-risk indicators, providing a lightweight diagnostic support tool for triage.',
      reflection: 'Emphasized the critical balance between raw accuracy and model interpretability in healthcare machine learning applications.'
    }
  },
  {
    id: 'safeher',
    number: '03',
    title: 'SafeHer Mobile Safety Network',
    tagline: 'Community Emergency Response & Location Alert Platform',
    description: 'A mobile application designed to enhance personal safety for women, featuring real-time emergency triggers, geo-fencing alerts, and trusted contact broadcasting.',
    category: 'Mobile App',
    featured: true,
    bentoSize: 'standard',
    image: 'assets/SafeHer-Logo.jpg',
    video: 'assets/SafeHer.mp4',
    technologies: ['React Native', 'Firebase', 'Geolocation API', 'Node.js'],
    metrics: [
      { label: 'Response Time', value: '< 2s Alert' },
      { label: 'Core Tech', value: 'React Native' },
      { label: 'Backend', value: 'Firebase Realtime' }
    ],
    codeSnippet: `// SafeHer Emergency Geo-Dispatch Trigger
import Geolocation from '@react-native-community/geolocation';

export const dispatchEmergencyAlert = async (userId) => {
  Geolocation.getCurrentPosition(async (pos) => {
    const payload = { user: userId, lat: pos.coords.latitude, lng: pos.coords.longitude };
    await firebase.database().ref('/alerts').push(payload);
  });
};`,
    caseStudy: {
      problem: 'Gender-based safety concerns require rapid, reliable, one-touch emergency response mechanisms accessible on mobile devices regardless of network conditions.',
      role: 'Mobile App Developer',
      timeline: '2024',
      challenge: 'Ensuring background location tracking operates with minimal battery drain while providing guaranteed zero-delay message dispatch during emergency triggers.',
      build: 'Engineered cross-platform mobile solution using React Native with native location services integration, Firebase real-time database listener, and instant push notification services.',
      outcome: 'Delivered an intuitive, single-tap SOS application tested under low-connectivity scenarios.',
      reflection: 'Reinforced the importance of human-centered mobile UI design when building critical emergency tools.'
    }
  },
  {
    id: 'credibot',
    number: '04',
    title: 'CrediBot Personal Finance Bot',
    tagline: 'WhatsApp Personal Finance & Loan Navigation Chatbot',
    description: 'CrediBot is your personal finance WhatsApp chatbot. He\'s your go-to guy for navigating loans and understanding financial policies.',
    category: 'WhatsApp Chatbots',
    featured: true,
    bentoSize: 'standard',
    image: 'assets/whatsapp-chatbot.webp',
    video: 'assets/CrediBot.mp4',
    technologies: ['Node.js', 'WhatsApp Web JS', 'Express', 'Finance Policy Engine'],
    metrics: [
      { label: 'Platform', value: 'WhatsApp' },
      { label: 'Core Stack', value: 'Node.js & WhatsAppWebJS' },
      { label: 'Domain', value: 'Loans & Financial Policy' }
    ],
    codeSnippet: `// CrediBot WhatsApp Loan Navigation Engine
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({ authStrategy: new LocalAuth() });
client.on('message', async (msg) => {
  if (msg.body.includes('loan')) {
    msg.reply('CrediBot: Let\'s navigate your loan options and financial policies safely!');
  }
});
client.initialize();`,
    caseStudy: {
      problem: 'Navigating loan agreements and understanding complex financial institution policies can be confusing and overwhelming for everyday consumers.',
      role: 'Lead Developer',
      timeline: '2025',
      challenge: 'Building a conversational WhatsApp bot in Node.js that delivers clear, accurate guidance on loan structures and financial policies.',
      build: 'Engineered with Node.js, Express, and WhatsApp Web JS to manage asynchronous user sessions and structured financial policy decision trees.',
      outcome: 'Delivered CrediBot as a trusted, accessible 24/7 personal finance guide natively inside WhatsApp.',
      reflection: 'Proved the value of automated chat assistants in simplifying complex financial navigation.'
    }
  },
  {
    id: 'finlit-gpt',
    number: '05',
    title: 'FinLit-GPT',
    tagline: 'Multilingual AI Financial Literacy & Scam Detection Platform',
    description: 'An AI-powered financial literacy platform that makes financial education accessible, personalized, and practical. Features 11 South African language translations, smart scam detection, document OCR analysis, and gamified budgeting.',
    category: 'Machine Learning / Chatbots',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/Finlit-Gpt.png',
    github: 'https://github.com/Nono140503/FinLit-GPT',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Google Cloud Translate', 'OCR Parsing', 'Node.js'],
    metrics: [
      { label: 'Languages', value: '11 SA Languages' },
      { label: 'Core AI', value: 'OpenAI & Google Cloud' },
      { label: 'Features', value: 'OCR & Scam Detect' }
    ],
    codeSnippet: `// FinLit-GPT Multilingual Financial AI Pipeline
import { OpenAI } from 'openai';
import { Translate } from '@google-cloud/translate';

export async function processFinLitQuery(userPrompt: string, targetLang: string) {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: "Accessible SA financial guide." }, { role: "user", content: userPrompt }]
  });
  return translateText(completion.choices[0].message.content, targetLang);
}`,
    caseStudy: {
      problem: 'Many young South Africans fall into debt due to limited financial education, reliance on credit, and predatory lending. Traditional financial literacy programs are text-heavy, English-only, and fail to engage today’s youth or those with low literacy.',
      role: 'Lead AI & Full-Stack Developer',
      timeline: '2025 - Present',
      challenge: 'Overcoming language and accessibility barriers by engineering an AI platform supporting South Africa\'s 11 official languages, real-time scam detection, and document OCR parsing for payslips and bank statements.',
      build: 'Engineered with React, TypeScript, Node.js, OpenAI API, and Google Cloud Translation API. Integrated OCR document analysis, smart phishing/scam detection, personalized budgeting tools, and gamified learning paths with quizzes and badges.',
      outcome: 'Delivered an inclusive AI financial advisor that simplifies budgeting, debt management, taxation, and scam prevention into natural native-language conversations.',
      reflection: 'Proved how combining multi-modal AI with localized language translation dramatically increases financial inclusion and vulnerability reduction for underserved communities.'
    }
  },
  {
    id: 'eims-website',
    number: '06',
    title: 'EIMS — Executive Integrated Management Solutions',
    tagline: 'Facilities Management Corporate Portal & Service Journey',
    description: 'A modern, responsive website revamp for Executive Integrated Management Solutions, a South African facilities-management company. The site presents its security, cleaning, hygiene, and building-maintenance services, with clear contact and consultation-request journeys.',
    category: 'React Apps / Websites',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/eims-website.png',
    link: 'https://www.eims.net.za/',
    technologies: ['React', 'TypeScript', 'Responsive Design', 'EmailJS'],
    metrics: [
      { label: 'Industry', value: 'Facilities Mgmt' },
      { label: 'Platform', value: 'React & TypeScript' },
      { label: 'Integrations', value: 'EmailJS Contact' }
    ]
  },
  {
    id: 'eco-south',
    number: '07',
    title: 'Eco South Partnership',
    tagline: 'Urban & Rural Planning Consultancy Platform',
    description: 'A professional consultancy website for Eco South Partnership, a South African urban and rural planning practice. The website presents planning and GIS services, selected work, contact information, and a downloadable land-development application form.',
    category: 'React Apps / Websites',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/eco-south.png',
    link: 'https://eco-south-website.vercel.app/',
    technologies: ['React', 'TypeScript', 'Responsive Design', 'Vite'],
    metrics: [
      { label: 'Domain', value: 'Urban Planning & GIS' },
      { label: 'Platform', value: 'React & Vite' },
      { label: 'Feature', value: 'Land Dev Downloads' }
    ]
  },
  {
    id: 'allybot',
    number: '08',
    title: 'AllyBot STEM Mentorship Bot',
    tagline: 'Empowering Women in Tech & IT Workspaces',
    description: 'WhatsApp chatbot providing automated mentorship resources, career roadmaps, and workplace guidance tailored for women navigating technical industries.',
    category: 'WhatsApp Chatbots',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/shutterstock_1180950625.jpg',
    video: 'assets/AllyBot.mp4',
    technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API'],
    metrics: [
      { label: 'Domain', value: 'Women in STEM' },
      { label: 'Platform', value: 'WhatsApp' }
    ]
  },
  {
    id: 'reprobot',
    number: '09',
    title: 'ReproBot Health Education Bot',
    tagline: 'Sexual & Reproductive Health Knowledge Bot',
    description: 'Empathetic WhatsApp companion delivering safe, confidential, and accurate information on sexual reproductive health education.',
    category: 'WhatsApp Chatbots',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/chatbot-app.jpg',
    video: 'assets/ReproBot.mp4',
    technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API'],
    metrics: [
      { label: 'Domain', value: 'Health Education' },
      { label: 'Privacy', value: 'Confidential Session' }
    ]
  },
  {
    id: 'weather-app',
    number: '10',
    title: '3D Weather Forecast Experience',
    tagline: 'Interactive Real-Time Weather Visualizer',
    description: 'Dynamic React application featuring live weather telemetry, hourly forecasts, and responsive visual updates powered by OpenWeatherMap API.',
    category: 'React Apps / Websites',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/Colorful_3d_Weather_Forecast.png',
    link: 'https://nono140503.github.io/WeatherApp/',
    technologies: ['React', 'OpenWeather API', 'CSS3', 'JavaScript'],
    metrics: [
      { label: 'API Integration', value: 'OpenWeatherMap' },
      { label: 'UI Style', value: 'Glassmorphism' }
    ]
  },
  {
    id: 'life-expectancy-analysis',
    number: '11',
    title: 'Global Health Spending & Life Expectancy',
    tagline: 'Data Analysis & Economic Healthcare Correlation Model',
    description: 'Exploratory data analysis investigating the relationship between healthcare spending, GDP per capita, and life expectancy outcomes across 190+ countries.',
    category: 'Machine Learning',
    featured: false,
    bentoSize: 'compact',
    image: 'assets/life-expectancy-world-map-hi.png',
    link: 'https://colab.research.google.com/drive/1aRQzg4RcptSW_kL4_HDv3MNP7Q5_TQl_?usp=sharing',
    technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    metrics: [
      { label: 'Dataset', value: '190+ Nations' },
      { label: 'Tooling', value: 'Google Colab' }
    ]
  }
];

export const getProjectCount = (category) => {
  if (category === 'all') return projectsData.length;
  return projectsData.filter(p => p.category.toLowerCase().includes(category.toLowerCase())).length;
};