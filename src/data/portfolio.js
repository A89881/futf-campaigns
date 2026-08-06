export const profile = {
  name: 'Abhay Mishra',
  eyebrow: 'Applied computational engineering · software systems',
  roles: [
    'Engineering Physics student',
    'Junior Software Engineer',
    'Computational physics researcher',
  ],
  intro:
    'I explore where theory meets application: scientific computing, cloud-native software, embedded systems, and hands-on engineering.',
  summary: [
    'I’m an ambitious and curious Engineering Physics student at Uppsala University with a deep interest in computational physics, embedded systems, and automation. I graduated high school two years early, at 17, after completing additional courses to accelerate my studies - a decision that reflects my drive to learn and challenge myself academically and technically.',
    'I enjoy taking initiative, learning quickly, and contributing to student and community activities that foster collaboration and creativity. I want to grow as an engineer who bridges curiosity, precision, and innovation in everything I do.',
  ],
  email: 'bakwert0123@gmail.com',
  phone: '+46 76 134 56 96',
  linkedin: 'https://www.linkedin.com/in/abhay-mishra-5aa78319a/',
  github: 'https://github.com/A89881',
  instagram: 'https://www.instagram.com/abbebabbe07/',
  cv: '/AbhayMishraCV-English.pdf',
  location: 'Uppsala, Sweden',
}

export const projects = [
  {
    index: '01',
    title: 'Longitudinal Spin Susceptibility Solver',
    period: 'Jun 2025 - Sep 2025',
    type: 'Research project · Uppsala University',
    description:
      'Developed a computational physics solver for longitudinal spin susceptibility using Dyson equations and LSDA-based DFT methods. Built robust numerical-processing and data-visualisation scripts for large-scale Materials Theory simulation outputs.',
    tags: ['Python', 'Computational physics', 'Numerical methods', 'DFT'],
    accent: 'blue',
    href: 'https://github.com/A89881/Longitudinal-Spin-Susceptibility-Solver-via-RSPt-Inputs-2025',
    cta: 'View on GitHub',
  },
  {
    index: '02',
    title: 'RoboticHandControl',
    period: 'Aug 2023 - Jun 2024',
    type: 'Embedded systems project',
    description:
      'Designed and programmed a remote-controlled bionic hand using servo actuation and wireless signal processing. The project received NTI Gymnasium’s Best Practical Graduation Project award.',
    tags: ['C++', 'Arduino', 'Mechatronics', 'Wireless control'],
    accent: 'pink',
    href: 'https://github.com/A89881/RoboticHandControl', cta: 'View on GitHub',
  },
  {
    index: '03',
    title: 'DataComparisonBio',
    period: 'Feb 2024 - Apr 2024',
    type: 'Bioinformatics analysis project',
    description:
      'Created Python tools to compare genomic datasets and extract statistical differences across samples. Implemented visualisation pipelines and automated comparison routines to improve reproducibility.',
    tags: ['Python', 'Bioinformatics', 'Data analysis', 'Automation'],
    accent: 'blue',
    href: 'https://github.com/A89881/DataComparisonBio', cta: 'View on GitHub',
  },
  {
    index: '04',
    title: 'GraphCalculator',
    period: 'Mar 2023 - May 2023',
    type: 'Scientific computing project',
    description:
      'Developed an interactive graphing calculator for plotting, differentiation, and intersection analysis, combining a desktop GUI with numerical computation and mathematical visualisation.',
    tags: ['Python', 'NumPy', 'Matplotlib', 'Tkinter'],
    accent: 'pink',
    href: 'https://github.com/A89881/GraphCalculator', cta: 'View on GitHub',
  },
  {
    index: '05',
    title: 'FUTF Campaigns Platform',
    period: 'Apr 2025',
    type: 'Web development',
    description:
      'Developed a responsive campaign platform for the Engineering Physics Guild, integrating dynamic frontend components and Git-based version-control workflows.',
    tags: ['Vue', 'JavaScript', 'Git', 'Responsive design'],
    accent: 'blue',
    href: '/campaign',
    github: 'https://github.com/A89881/futf-campaigns',
    cta: 'View campaign archive',
  },
]

export const organisationLinks = {
  'BruhnBruhn Innovation': 'https://bruhnbruhn.com/about-us/',
  'Uppsala University': 'https://www.uu.se/en/',
  'Uppsala University - Faculty of Engineering and Science': 'https://www.uu.se/en/about-uu/organisation/faculties/faculty-of-science-and-technology',
  'Uppsala University - Department of Physics and Astronomy': 'https://www.uu.se/en/contact-and-organisation/organisation?query=X208%3A39',
  'NTI Gymnasium': 'https://ntigymnasiet.se/uppsala/',
  'Allakando': 'https://www.allakando.se/',
  'SLU - Swedish University of Agricultural Sciences': 'https://www.slu.se/om-slu/kontakta-slu/',
  'Uppsala Union of Engineering and Science Students (UTN)': 'https://utn.se/en',
  'F1RST - Uppsala': 'https://f1rst.se/vilka-vi-ar/',
  'FUTF - Uppsala Engineering Physics Guild': 'https://futf.se/sektionen/omfutf',
}

export const defaultExperiences = [
  {
    id: 'bruhnbruhn-jse',
    category: 'professional',
    title: 'Junior Software Engineer',
    organisation: 'BruhnBruhn Innovation',
    organisationHref: 'https://bruhnbruhn.com/about-us/',
    location: 'Uppsala, Sweden',
    start: 'September 2025',
    end: 'Present',
    description:
      'Developing cloud-native software systems, distributed microservice architectures, and AI-enabled demonstration platforms across the DacreoOS and SpaceStack ecosystems for aerospace and Earth-observation applications.',
    highlights: [
      'Designing and maintaining containerised microservices, scalable backend services, and platform integrations.',
      'Supporting Kubernetes deployments, GitLab CI/CD workflows, observability, heartbeat monitoring, and system-status services.',
      'Creating automated testing and validation frameworks and integrating Earth-observation data processing.',
      'Developing and evaluating machine-learning and computer-vision models for image analysis and real-time video analytics.',
    ],
  },
  {
    id: 'uu-student-ambassador',
    category: 'professional',
    title: 'Student Ambassador - Faculty of Engineering and Science',
    organisation: 'Uppsala University',
    organisationHref: 'https://www.uu.se/en/staff/faculty/science-and-technology/education-and-teaching/student-recruitment',
    location: 'Uppsala, Sweden',
    start: 'September 2025',
    end: 'Present',
    description:
      'Presenting Uppsala University’s engineering and science programmes and student life to prospective students through outreach, marketing, and public speaking.',
    highlights: [],
  },
  {
    id: 'scifest-2025',
    category: 'professional',
    title: 'SciFest Functionary',
    organisation: 'Uppsala University - Faculty of Engineering and Science',
    organisationHref: 'https://www.uu.se/en/about-uu/organisation/faculties/faculty-of-science-and-technology',
    location: 'Uppsala, Sweden',
    start: 'October 2025',
    end: 'October 2025',
    description:
      'Supported visitor registration, lounge operations, preparation, and clean-up during SciFest 2025.',
    highlights: [],
  },
  {
    id: 'materials-theory-research',
    category: 'research',
    title: 'Summer Research Intern - Division of Materials Theory',
    organisation: 'Uppsala University - Department of Physics and Astronomy',
    organisationHref: 'https://www.uu.se/en/contact-and-organisation/organisation?query=X208%3A39',
    location: 'Uppsala, Sweden',
    start: 'June 2025',
    end: 'September 2025',
    description:
      'Worked in Olle Eriksson’s Materials Theory group under Rohit Pathak, Vladislav Borisov, and Olle Eriksson, using computational physics, data processing, and numerical methods to simulate and visualise solution data.',
    highlights: [
      'Created generalised software for determining longitudinal spin susceptibility using Dyson equations.',
      'Solved coupled linear equations involving static bare and interacting susceptibility based on ADA-DFT models in LSDA.',
    ],
  },
  {
    id: 'nti-substitute-teacher',
    category: 'professional',
    title: 'Substitute Teacher - Tutoring Support',
    organisation: 'NTI Gymnasium',
    organisationHref: 'https://ntigymnasiet.se/uppsala/',
    location: 'Uppsala, Sweden',
    start: 'September 2024',
    end: 'June 2025',
    description:
      'Worked as a substitute teacher in secondary-level mathematics and physics and ran weekly tutoring-support sessions.',
    highlights: [],
  },
  {
    id: 'allakando-study-coach',
    category: 'professional',
    title: 'Study Coach',
    organisation: 'Allakando',
    organisationHref: 'https://www.allakando.se/',
    location: 'Uppsala, Sweden',
    start: 'June 2024',
    end: 'October 2024',
    description:
      'Guided students through their studies and helped them strengthen academic habits and educational performance.',
    highlights: [],
  },
  {
    id: 'slu-field-analytics',
    category: 'professional',
    title: 'Field Assistant and Statistical Analysis Intern',
    organisation: 'SLU - Swedish University of Agricultural Sciences',
    organisationHref: 'https://www.slu.se/om-slu/kontakta-slu/',
    location: 'Uppsala, Sweden',
    start: 'June 2024',
    end: 'July 2024',
    description:
      'Worked with plant-matter extraction for field experiments and gained experience in statistical analysis of the collected material.',
    highlights: [],
  },
  {
    id: 'utnarm-2026-pr',
    category: 'community',
    title: 'Committee Member and PR Manager - UTNARM 2026',
    organisation: 'Uppsala Union of Engineering and Science Students (UTN)',
    location: 'Uppsala, Sweden',
    start: 'March 2026',
    end: 'November 2026',
    description:
      'Committee member responsible for executing UTNARM 2026’s marketing and engagement strategy across corporate and student audiences. Serious strategy, ambitious delivery - and genuinely a lot of fun.',
    highlights: [],
  },
  {
    id: 'utn-council-2026',
    category: 'community',
    title: 'Convening Representative - UTN Council (FUM)',
    organisation: 'Uppsala Union of Engineering and Science Students (UTN)',
    location: 'Uppsala, Sweden',
    start: 'January 2026',
    end: 'December 2026',
    description:
      'Convening representative for FUTF in the student union council, coordinating representation, voicing the guild’s positions in UTN policy discussions, and managing the documents and preparation behind that work.',
    highlights: [],
  },
  {
    id: 'first-community',
    category: 'community',
    title: 'Board Member and Head of Community',
    organisation: 'F1RST - Uppsala',
    location: 'Uppsala, Sweden',
    start: 'May 2025',
    end: 'May 2026',
    description:
      'Board member for the newly established Uppsala University branch, working with marketing and outreach, maintaining the ambassador network, and developing the local organisation.',
    highlights: [],
  },
  {
    id: 'utnarm-2025-corporate-host', category: 'community', title: 'Corporate Host - UTNARM 2025',
    organisation: 'Uppsala Union of Engineering and Science Students (UTN)', location: 'Uppsala, Sweden',
    start: 'September 2025', end: 'November 2025',
    description: 'Hosted a participating company and served as its primary contact around the fair day, making sure the practical details and human welcome both landed well.', highlights: [],
  },
  {
    id: 'tdb-2025-head-buddy', category: 'community', title: 'Head Buddy - TDB Reception 2025',
    organisation: 'Uppsala Union of Engineering and Science Students (UTN)', location: 'Uppsala, Sweden',
    start: 'May 2025', end: 'September 2025',
    description: 'Helped lead the reception for incoming Engineering Physics students: two intensive weeks of planning and activities for a new class and their buddies - roughly 80 people in total.', highlights: [],
  },
  {
    id: 'forsranningen-2025-volunteer', category: 'community', title: 'Forsfestival Volunteer - Forsränningen 2025',
    organisation: 'Uppsala Union of Engineering and Science Students (UTN)', location: 'Uppsala, Sweden',
    start: 'April 2025', end: 'April 2025',
    startDate: '2025-04-19', endDate: '2025-04-30',
    description: 'Volunteered with bar and kitchen operations during Forsfestivalen near Ångström Laboratory.', highlights: ['Participation certificate available in the appendix.'],
  },
  {
    id: 'futf-content-design', category: 'community', title: 'Content Creator and Graphic Designer - Marketing and Information Group',
    organisation: 'FUTF - Uppsala Engineering Physics Guild', location: 'Uppsala, Sweden',
    start: 'August 2025', end: 'September 2026',
    description: 'Created and developed merchandise, campaign material, social content, and brand assets for the guild, including video editing and production-focused graphic design.', highlights: [],
  },
  {
    id: 'futf-course-safety', category: 'community', title: 'Course and Safety Representative - Education and Student Environment Committee',
    organisation: 'FUTF - Uppsala Engineering Physics Guild', location: 'Uppsala, Sweden',
    start: 'August 2024', end: 'September 2026',
    description: 'Represented student concerns and positions concerning courses, educational quality, safety, and the wider study environment.', highlights: [],
  },
  {
    id: 'futf-it-group', category: 'community', title: 'Developer and Graphic Designer - IT Group',
    organisation: 'FUTF - Uppsala Engineering Physics Guild', location: 'Uppsala, Sweden',
    start: 'August 2024', end: 'September 2025',
    description: 'Contributed frontend development, UX design, marketing, documentation, and practical coordination to the guild’s digital work.', highlights: [],
  },
  {
    id: 'futf-cafe-host', category: 'community', title: 'Café Host - Café Group',
    organisation: 'FUTF - Uppsala Engineering Physics Guild', location: 'Uppsala, Sweden',
    start: 'August 2024', end: 'September 2025',
    description: 'Supported café operations, sales, kitchen work, marketing, and graphic design - a surprisingly useful mix of service, logistics, and communication.', highlights: [],
  },
  {
    id: 'futf-friday-fika', category: 'community', title: 'Baker - Friday Fika',
    organisation: 'FUTF - Uppsala Engineering Physics Guild', location: 'Uppsala, Sweden',
    start: 'August 2024', end: 'September 2025',
    description: 'Helped keep the Engineering Physics tradition of Friday fika alive. Not every contribution needs Kubernetes; sometimes cake is the correct infrastructure.', highlights: [],
  },
  {
    id: 'futf-event-media', category: 'community', title: 'Event Media and Marketing Contributor',
    organisation: 'FUTF - Uppsala Engineering Physics Guild', location: 'Uppsala, Sweden',
    start: 'September 2025', end: 'June 2026',
    description: 'Worked across event photography, video editing, and marketing for guild banquets and gasques.', highlights: ['Head of Marketing - Mid-Degree Gasque 2026', 'Photographer - Graduation Banquet 2026, TeFAT Banquet 2026, and FX Semi-Formal Gasque 2025', 'Video Editor - Annual Ladies Gasque 2026'],
  },
  {
    id: 'nti-ambassador',
    category: 'community',
    title: 'Student Ambassador and Student Representative',
    organisation: 'NTI Gymnasium',
    location: 'Uppsala, Sweden',
    start: 'August 2022',
    end: 'June 2024',
    description:
      'Represented the technology programme in dialogue with students, teachers, and school leadership and at school fairs, open houses, and campaign activities.',
    highlights: [],
  },
  {
    id: 'sleeq-uf',
    category: 'community',
    title: 'Design and Legal Lead',
    organisation: 'Sleeq UF',
    location: 'Uppsala, Sweden',
    start: '2022',
    end: '2022',
    description:
      'Co-founded a student clothing company and worked on its visual identity and the legal aspects of its webshop.',
    highlights: [],
  },
]

export const education = [
  {
    degree: 'Master of Science in Engineering - Engineering Physics',
    focus: 'Applied Computational Engineering',
    school: 'Uppsala University',
    schoolHref: 'https://www.uu.se/en/study/programme/masters-programme-engineering-physics',
    location: 'Uppsala, Sweden',
    period: 'August 2024 - June 2028',
  },
  {
    degree: 'High School Diploma - Teknikprogrammet',
    focus: 'Information and Media Technology',
    school: 'NTI Gymnasium',
    schoolHref: 'https://ntigymnasiet.se/uppsala/',
    location: 'Uppsala, Sweden',
    period: 'August 2021 - June 2024',
  },
]

export const skills = [
  { category: 'Programming', items: ['Python', 'C++', 'C#', 'Arduino', 'JavaScript', 'HTML/CSS', 'MATLAB'] },
  { category: 'Frameworks & libraries', items: ['Vue.js', 'React', 'NumPy', 'SciPy', 'Matplotlib', 'Tkinter', 'Unity', 'Flutter'] },
  { category: 'Scientific computing', items: ['Numerical methods', 'Mathematical modelling', 'Data processing', 'Simulation analysis', 'Data visualisation'] },
  { category: 'Cloud & systems', items: ['Containerised microservices', 'Kubernetes', 'GitLab CI/CD', 'Platform observability', 'Automated testing'] },
  { category: 'Software & design', items: ['Git', 'LaTeX', 'Figma', 'Microsoft Office', 'Slack'] },
  { category: 'Languages', items: ['English - fluent', 'Swedish - fluent', 'German - A2', 'Hindi - native spoken'] },
]

export const principles = [
  { number: '01', title: 'Bridge theory and application', text: 'Move deliberately between rigorous models and systems that work in practice.' },
  { number: '02', title: 'Learn by building', text: 'Take initiative, prototype thoughtfully, validate assumptions, and improve through evidence.' },
  { number: '03', title: 'Make the work legible', text: 'Strong engineering becomes more useful when people can understand, operate, and extend it.' },
]

export const appendixDocuments = [
  {
    title: 'Curriculum Vitae',
    type: 'Resume',
    date: 'May 2026',
    description: 'Current English CV covering education, employment, technical projects, student engagement, and skills.',
    href: '/AbhayMishraCV-English.pdf',
    available: true,
  },
  {
    title: 'Forsränningen 2025 Participation Certificate',
    type: 'Certification',
    date: 'April 2025',
    description: 'Certificate from the Uppsala Union of Engineering and Science Students confirming volunteer service. Personal identity number redacted for public display.',
    href: '/documents/Forsranningen-2025-certificate-redacted.pdf',
    available: true,
  },
  {
    title: 'Academic transcript and grades',
    type: 'Academic record',
    date: 'Available on request',
    description: 'Official grade documentation is shared directly when relevant rather than published publicly.',
    href: null,
    available: false,
  },
  {
    title: 'Letters of recommendation',
    type: 'References',
    date: 'Available on request',
    description: 'References and recommendation letters are available for appropriate professional and academic contexts.',
    href: null,
    available: false,
  },
]
