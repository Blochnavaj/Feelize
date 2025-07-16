import serviceid_1 from '../assets/serviceid_1.png';
import serviceid_2 from '../assets/serviceid_2.png';
import serviceid_3 from '../assets/serviceid_3.png';
import serviceid_4 from '../assets/serviceid_4.png';
import serviceid_5 from '../assets/serviceid_5.png';
import serviceid_6 from '../assets/serviceid_6.png';

export const imageMap = {
  'serviceid_1.png': serviceid_1,
  'serviceid_2.png': serviceid_2,
  'serviceid_3.png': serviceid_3,
  'serviceid_4.png': serviceid_4,
  'serviceid_5.png': serviceid_5,
  'serviceid_6.png': serviceid_6,
};

export const featuredServices = [
  {
    id: 1,
    title: '🔧 Technical Support & Performance Optimization',
    category: 'Maintenance & Support',
    price: '$99/hr',
    image: 'serviceid_1.png',
    description:
      'We provide rapid debugging, performance fixes, and backend support to ensure your SaaS platforms run smoothly and reliably at all times.',
    serviceDetail: [
      '24/7 technical support for urgent issues and outages',
      'Performance monitoring and optimization for web and backend systems',
      'Proactive bug detection and rapid debugging',
      'Security patching and regular system health checks',
      'Custom maintenance plans tailored to your stack',
    ],
  },
  {
    id: 2,
    title: '🧩 Full Stack Development',
    category: 'Product Engineering',
    price: '$199/hr',
    image: 'serviceid_2.png',
    description:
      'We design and build full-fledged SaaS products from user interfaces to robust APIs using modern stacks like MERN, PostgreSQL, Docker, and more.',
    serviceDetail: [
      'End-to-end product design and architecture',
      'Frontend (React, Vue) and backend (Node.js, Express) expertise',
      'Database design (SQL/NoSQL) and API development',
      'CI/CD, Dockerization, and cloud deployment',
      'Agile development with regular demos and feedback',
    ],
  },
  {
    id: 3,
    title: '🤖 AI Integration & Automation',
    category: 'AI & ML Solutions',
    price: '$199/hr',
    image: 'serviceid_3.png',
    description:
      'Integrate AI into your product from OCR and chatbot automation to recommendation systems using reliable, production-ready pipelines.',
    serviceDetail: [
      'Custom AI model integration (NLP, OCR, chatbots)',
      'Automation of repetitive business processes',
      'Recommendation engines and predictive analytics',
      'Data pipeline setup and model deployment',
      'Ongoing AI model monitoring and tuning',
    ],
  },
  {
    id: 4,
    title: '🛠️ Small Business Website Setup',
    category: 'Startup Solutions',
    price: '$99/hr',
    image: 'serviceid_4.png',
    description:
      'Perfect for startups and SMEs — we offer end-to-end solutions including website setup, hosting, basic CRM, email integration, and launch readiness.',
    serviceDetail: [
      'Custom website design and development',
      'Domain registration and secure hosting setup',
      'Basic CRM and contact form integration',
      'Email setup and newsletter integration',
      'SEO optimization and launch support',
    ],
  },
  {
    id: 5,
    title: '💻 Custom Software Solutions',
    category: 'Enterprise Development',
    price: '$299/hr',
    image: 'serviceid_5.png',
    description:
      'We engineer scalable, high-performance custom platforms tailored to your unique business workflows — with long-term support and upgrades.',
    serviceDetail: [
      'Bespoke software tailored to your business needs',
      'Enterprise-grade security and compliance',
      'Integration with existing tools and APIs',
      'Scalable architecture for future growth',
      'Comprehensive documentation and training',
    ],
  },
  {
    id: 6,
    title: '📦 SaaS MVP Launch Package',
    category: 'Go-to-Market',
    price: '$299/hr',
    image: 'serviceid_6.png',
    description:
      'Launch your SaaS idea fast with our MVP package — includes core frontend/backend features, auth, dashboard, and cloud deployment support.',
    serviceDetail: [
      'Rapid MVP development (frontend & backend)',
      'User authentication and admin dashboard',
      'Cloud deployment and CI/CD setup',
      'Analytics and user feedback integration',
      'Post-launch support and iteration',
    ],
  },
];
