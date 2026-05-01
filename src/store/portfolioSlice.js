import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: 'Saurabh Kumar Mishra',
    role: 'Frontend Developer',
    tagline: 'Crafting digital experiences through code.',
    bio: 'I am a passionate Frontend Developer with expertise in building responsive, scalable, and modern web applications. I love transforming complex problems into intuitive, user-friendly interfaces.',
    email: 'saurabhkm628732@gmail.com',
    phone: '+91-6287320996',
    github: 'https://github.com/SaurabhKmMishra',
    linkedin: 'https://www.linkedin.com/in/skmsaurabh',
  },
  skills: [
    { category: 'Core', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
    { category: 'Frameworks/Libraries', items: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Tools', items: ['Git', 'Webpack', 'Vite'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Agile Methodology', 'Communication'] }
  ],
  experience: [
    {
      id: 2,
      role: 'Web Developer',
      company: 'Softcure Technology LLP',
      period: 'Jan 2026 - Mar 2026',
      location: 'Meerut, Uttar Pradesh, India · On-site',
      description: 'Completed a 2-month on-site Web Developer Internship at Soft Cure Technology LLP, a healthcare SaaS provider specializing in NABH-compliant Hospital Information Management Systems (HIMS). I developed responsive web interfaces using HTML5, CSS3, and JavaScript for live client projects, gained practical exposure to healthcare-focused CRM systems by managing clinical data workflows and medical information, and enhanced my communication skills through daily coordination with mentors, team stand-ups, and documentation within a professional SaaS development environment.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SaaS']
    },
    {
      id: 1,
      role: 'Frontend Web Developer',
      company: 'Delimp Technology',
      period: 'Jun 2025 - Jul 2025',
      location: 'Noida, Uttar Pradesh, India · Hybrid',
      description: 'Completed a 2-month hybrid ReactJS internship at Delimp Technology, building dynamic web applications with functional components and Hooks. Collaborated with cross-functional teams to integrate RESTful APIs and optimize front-end performance, delivering responsive solutions for diverse e-commerce and enterprise CMS clients.',
      tags: ['ReactJS', 'Hooks', 'RESTful APIs', 'Front-End Performance']
    }
  ],
  certifications: [
    {
      id: 1,
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Apr 2025',
      credentialId: 'saurabhkmmishra-rwd',
      skills: ['Cascading Style Sheets (CSS)', 'HTML5'],
      link: 'https://www.freecodecamp.org/certification/SaurabhkmMishra/responsive-web-design'
    },
    {
      id: 2,
      name: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'Apr 2025',
      credentialId: 'IDD5CFCC6B60B0',
      link: 'https://www.hackerrank.com/certificates/d5cfcc6b60b0'
    },
    {
      id: 3,
      name: 'CROSSROADS-24 Technical Competition',
      issuer: 'Hi-Tech Institute of Engineering & Technology, Ghaziabad',
      date: 'Nov 2024',
      link: 'https://drive.google.com/file/d/1n1wbxxlpkhLidMFJxY-yA6uhwV1o9ZLm/view?usp=drivesdk'
    },
    {
      id: 4,
      name: 'Artificial Intelligence & M.L Workshop',
      issuer: 'Training Basket',
      date: 'Jun 2023',
      link: 'https://drive.google.com/file/d/1QfLBdcysaMoWbeRgMLCiWSNOudP2ES4J/view?usp=sharing'
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Technology',
      period: '2019 - 2023',
      affiliation: 'Graduated with Honors'
    }
  ],
  ui: {
    activeSection: 'home',
    theme: 'dark'
  }
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.ui.activeSection = action.payload;
    },
    toggleTheme: (state) => {
      state.ui.theme = state.ui.theme === 'dark' ? 'light' : 'dark';
    }
  }
});

export const { setActiveSection, toggleTheme } = portfolioSlice.actions;
export default portfolioSlice.reducer;
