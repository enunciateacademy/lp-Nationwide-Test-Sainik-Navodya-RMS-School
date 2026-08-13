import { FaqItem, FeatureItem, LeaderboardEntry, TestimonialItem } from '../types';

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi NCR',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Jammu & Kashmir',
  'Ladakh',
];

export const EXAM_CATEGORIES = [
  'Sainik School Class 6 Entrance (AISSEE)',
  'Sainik School Class 9 Entrance (AISSEE)',
  'Rashtriya Military Schools (RMS)',
  'Rashtriya Indian Military College (RIMC)',
  'Jawahar Navodaya Vidyalaya (JNVST)',
  'School Foundation (Classes 5-10)',
  'State/CBSE Board Tuitions',
];

export const STUDENT_BRACKETS = [
  '10 - 25 Students',
  '26 - 50 Students',
  '51 - 100 Students',
  '101 - 250 Students',
  '250+ Students',
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'daily-tests',
    title: 'DAILY TESTS',
    subtitle: 'High-Frequency Exam Readiness',
    description: 'Structured daily examinations designed for consistent preparation and AISSEE pattern mastery.',
    iconName: 'FileCheck2',
    tag: 'Daily Practice',
    samplePreviewTitle: 'Daily AISSEE Pattern Mock Series',
    previewDetails: [
      'OMR sheet emulation & instant digital evaluation',
      'Topic-wise 25-question daily drill & timed sectionals',
      'Full bilingual test availability (English & Hindi)',
      'Detailed solution PDFs instantly accessible post-submission',
    ],
  },
  {
    id: 'handwritten-notes',
    title: 'HANDWRITTEN NOTES',
    subtitle: 'Curated by Expert Mentors',
    description: 'High-quality digital study material and handwritten concept sheets accessible to every enrolled student.',
    iconName: 'BookOpen',
    tag: 'Study Material',
    samplePreviewTitle: 'Handcrafted Concept & Formula Compendiums',
    previewDetails: [
      'Step-by-step visual breakdowns for tricky Math & Intelligence concepts',
      'High-yield short tricks for rapid mental arithmetic',
      'Downloadable & watermarked with your tuition centre branding',
      'Comprehensive coverage of General Knowledge & Language skills',
    ],
  },
  {
    id: 'recorded-courses',
    title: 'RECORDED COURSES',
    subtitle: '24x7 Concept Revision',
    description: 'Give students structured access to recorded lessons for in-depth revision outside tuition hours.',
    iconName: 'Video',
    tag: 'Digital Learning',
    samplePreviewTitle: 'Core Subject Video Modules',
    previewDetails: [
      'Bite-sized concept masterclasses by top defence entrance specialists',
      'Doubt-clearing walkthroughs for previous 10 years AISSEE papers',
      'Zero buffering adaptive bitrate streaming on mobile & desktop',
      'Complements your physical classroom teaching without replacing you',
    ],
  },
  {
    id: 'all-india-test-series',
    title: 'ALL-INDIA TEST SERIES',
    subtitle: 'National Benchmark',
    description: 'Let your students compete with thousands of learners from participating centres across India.',
    iconName: 'Trophy',
    tag: 'Pan-India Rank',
    samplePreviewTitle: 'All-India Sainik School Test Series 2027',
    previewDetails: [
      'Synchronized weekend Grand All-India Mock Exams',
      'Exact NTA/AISSEE marking schemes, negative marking & difficulty weighting',
      'Real-time percentile tracking against thousands of peers nationwide',
      'State-wise & District-wise competitive benchmarking',
    ],
  },
  {
    id: 'performance-analytics',
    title: 'PERFORMANCE ANALYTICS',
    subtitle: 'Actionable Intelligence',
    description: 'Track student progress, strengths, weaknesses and test participation with actionable visual insights.',
    iconName: 'BarChart3',
    tag: 'Centre Insights',
    samplePreviewTitle: 'Centre Director & Parent Dashboard',
    previewDetails: [
      'Subject-wise accuracy, speed index & negative marks distribution',
      'One-click WhatsApp PDF report cards ready to send to parents',
      'Early warning indicators for lagging or disengaged students',
      'Batch comparison matrices to track tuition point improvement',
    ],
  },
  {
    id: 'centre-rankings',
    title: 'CENTRE RANKINGS',
    subtitle: 'Transparent Benchmarking',
    description: 'Show students how they perform at Centre, State and All-India levels to foster healthy ambition.',
    iconName: 'Award',
    tag: 'Leaderboard',
    samplePreviewTitle: 'Multi-Tier Rank Architecture',
    previewDetails: [
      'Centre-level rank to crown your local top performers every week',
      'State-level rank to see how your district stacks up against the state',
      'National All-India Rank (AIR) for genuine entrance exam readiness',
      'Customizable merit certificates featuring your institute logo',
    ],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Partner With Us',
    description: 'Register your tuition centre in under 2 minutes. Receive your dedicated partner portal credentials and co-branded toolkit.',
    highlight: 'Zero upfront infrastructure cost',
    iconName: 'Building2',
  },
  {
    step: '02',
    title: 'Enroll Your Students',
    description: 'Add your existing classroom students or onboard new Sainik School aspirants under your tuition centre batch.',
    highlight: 'Retain 100% of your student relationships',
    iconName: 'UserCheck',
  },
  {
    step: '03',
    title: 'Conduct Daily Learning & Tests',
    description: 'Students access daily test series, handwritten concept notes, and recorded video lessons on the portal.',
    highlight: 'Synchronized daily academic calendar',
    iconName: 'Laptop',
  },
  {
    step: '04',
    title: 'Track & Grow',
    description: 'Monitor individual batch performance, share branded report cards with parents, and celebrate national leaderboard ranks.',
    highlight: 'Boost admissions & student retention',
    iconName: 'TrendingUp',
  },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    studentName: 'Aarav Sharma',
    centreName: 'Shree Ram Gurukul',
    city: 'Jaipur',
    state: 'Rajasthan',
    score: 288,
    totalMarks: 300,
    percentage: 96.0,
    percentile: 99.94,
    badge: 'AIR 1 🏆',
    category: 'Class 6',
  },
  {
    rank: 2,
    studentName: 'Priya Rathore',
    centreName: 'Apex Defence Academy',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    score: 285,
    totalMarks: 300,
    percentage: 95.0,
    percentile: 99.82,
    badge: 'AIR 2 🥈',
    category: 'Class 6',
  },
  {
    rank: 3,
    studentName: 'Kunal Deshmukh',
    centreName: 'National Scholars Point',
    city: 'Pune',
    state: 'Maharashtra',
    score: 282,
    totalMarks: 300,
    percentage: 94.0,
    percentile: 99.65,
    badge: 'AIR 3 🥉',
    category: 'Class 6',
  },
  {
    rank: 4,
    studentName: 'Devansh Verma',
    centreName: 'Vigyan Coaching Centre',
    city: 'Patna',
    state: 'Bihar',
    score: 279,
    totalMarks: 300,
    percentage: 93.0,
    percentile: 99.31,
    category: 'Class 6',
  },
  {
    rank: 5,
    studentName: 'Sneha Chhetri',
    centreName: 'Doon Valley Learning Point',
    city: 'Dehradun',
    state: 'Uttarakhand',
    score: 276,
    totalMarks: 300,
    percentage: 92.0,
    percentile: 98.98,
    category: 'Class 6',
  },
  {
    rank: 6,
    studentName: 'Manish Rawat',
    centreName: 'Sainik Edge Institute',
    city: 'Rohtak',
    state: 'Haryana',
    score: 273,
    totalMarks: 300,
    percentage: 91.0,
    percentile: 98.64,
    category: 'Class 6',
  },
  {
    rank: 7,
    studentName: 'Ananya Reddy',
    centreName: 'Kakatiya Tuition Centre',
    city: 'Warangal',
    state: 'Telangana',
    score: 270,
    totalMarks: 300,
    percentage: 90.0,
    percentile: 98.22,
    category: 'Class 6',
  },
  {
    rank: 8,
    studentName: 'Rohan Banerjee',
    centreName: 'Pratibha Coaching Point',
    city: 'Kolkata',
    state: 'West Bengal',
    score: 268,
    totalMarks: 300,
    percentage: 89.3,
    percentile: 97.85,
    category: 'Class 6',
  },
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-1',
    name: 'Rajeshwar Singh Chauhan',
    role: 'Director & Founder',
    centreName: 'Chauhan Defence Tuition Point',
    location: 'Jhunjhunu, Rajasthan',
    quote:
      'As a local tuition centre owner, creating fresh daily test papers and handwritten notes was exhausting. Enunciate Academy gave our 45 students a national-level test platform while keeping our institute name in the spotlight. Parents are thrilled with the monthly performance analytics.',
    studentsCount: '48 Students Enrolled',
    partnerSince: 'Academic Session 2026-27',
    isDemo: true,
  },
  {
    id: 'demo-2',
    name: 'Anita Dwivedi',
    role: 'Managing Director',
    centreName: 'Vidya Jyoti Coaching Classes',
    location: 'Varanasi, Uttar Pradesh',
    quote:
      'Our students used to lack confidence when facing the real Sainik School entrance. With Enunciate Academy’s All-India Test Series, they now compete every Sunday with thousands of peers nationwide. Our admission enquiries increased by 40% after we adopted the co-branded system.',
    studentsCount: '62 Students Enrolled',
    partnerSince: 'Academic Session 2026-27',
    isDemo: true,
  },
  {
    id: 'demo-3',
    name: 'Subhash Chandra Nayak',
    role: 'Lead Educator',
    centreName: 'Utkal Career Academy',
    location: 'Cuttack, Odisha',
    quote:
      'The biggest relief is that we didn’t have to invest lakhs into building an app or website. Enunciate Academy handles all the academic questions, video courses, and server infrastructure, while we focus 100% on teaching in our classroom.',
    studentsCount: '35 Students Enrolled',
    partnerSince: 'Academic Session 2026-27',
    isDemo: true,
  },
];

export const FAQS_LIST: FaqItem[] = [
  {
    question: 'Do I need to change my tuition centre’s name?',
    answer:
      'No. Partner centres can continue operating under their own local identity, subject to the partnership terms. Your students see your centre’s name proudly displayed, powered by Enunciate Academy’s backend academic technology.',
  },
  {
    question: 'Do I need to build my own app?',
    answer:
      'No. Enunciate Academy provides the entire digital infrastructure including the online test engine, handwritten notes reader, video player, and analytics dashboard. You and your students can access it immediately via web and mobile browsers.',
  },
  {
    question: 'Can my students access daily tests online?',
    answer:
      'Yes, through the supported digital learning platform. Tests follow strict AISSEE patterns, with timed OMR-style sections, instant answer keys, and bilingual explanations.',
  },
  {
    question: 'Can my students participate in All-India tests?',
    answer:
      'Yes, where they are enrolled in the applicable All-India Test Series. They will be ranked alongside students from all participating partner centres across India with detailed All-India Rank (AIR), State Rank, and Centre Rank.',
  },
  {
    question: 'Can I earn from student enrollments?',
    answer:
      'Yes. Partner-centre commercial terms can include a centre margin, depending on the selected program and partnership arrangement. You retain direct financial relationships with your students while offering premium Pan-India digital capability.',
  },
  {
    question: 'Is this only for large coaching centres?',
    answer:
      'No. The model is designed to support small, medium, and established tuition centres alike — whether you have 10 students in a single room or 200+ students across multiple batches.',
  },
  {
    question: 'Can I retain my tuition centre’s brand?',
    answer:
      'Yes. The partnership is designed to strengthen your centre rather than replace its local identity. All report cards, test sheets, and student login portals highlight your centre name prominently.',
  },
];

export const PROBLEM_POINTS = [
  {
    title: 'Preparing Quality Tests Daily',
    desc: 'Drafting 50–100 error-free AISSEE-standard questions every single week consumes dozens of hours that should be spent teaching.',
    icon: 'Clock',
  },
  {
    title: 'Creating Structured Handwritten Notes',
    desc: 'Students demand crisp, visual concept sheets and formula tricks, but creating them from scratch is deeply labor-intensive.',
    icon: 'FileText',
  },
  {
    title: 'Managing Online Content & Portals',
    desc: 'Hiring developers or licensing generic software costs lakhs and comes with complex server maintenance and technical headaches.',
    icon: 'ServerCrash',
  },
  {
    title: 'Tracking Student Performance & Analytics',
    desc: 'Manual registers and paper marks fail to pinpoint individual topic weaknesses, speed bottlenecks, or negative mark patterns.',
    icon: 'LineChart',
  },
  {
    title: 'Competing with Large EdTech Giants',
    desc: 'Venture-funded brands lure local students with flashy app dashboards and national test claims, threatening local tuition retention.',
    icon: 'ShieldAlert',
  },
  {
    title: 'Keeping Students Engaged Outside Class',
    desc: 'Without daily digital homework and recorded revision lessons, students fall behind between physical classroom sessions.',
    icon: 'SmartphoneNfc',
  },
  {
    title: 'Providing Modern Digital Facilities',
    desc: 'Parents today expect computerized test reports, WhatsApp updates, and national benchmarking that traditional centres struggle to offer.',
    icon: 'Sparkles',
  },
];

export const OWNER_BENEFITS = [
  {
    title: 'MORE VALUE',
    subtitle: 'Multiply Your Student Offerings',
    desc: 'Offer structured daily tests, handwritten notes, recorded video lectures, and national ranking to your existing student base.',
    icon: 'Layers',
  },
  {
    title: 'LOWER TECHNOLOGY BURDEN',
    subtitle: 'Zero Software Overhead',
    desc: 'No need to build or maintain your own examination platform from scratch. Plug straight into our battle-tested academic engine.',
    icon: 'Cpu',
  },
  {
    title: 'STUDENT RETENTION',
    subtitle: 'Daily Academic Engagement',
    desc: 'Give students structured daily motivation and competitive goals that keep them enrolled in your centre throughout the academic year.',
    icon: 'Users',
  },
  {
    title: 'BETTER PARENT COMMUNICATION',
    subtitle: 'Measurable Transparency',
    desc: 'Generate professional, co-branded PDF report cards and graphical analytics that clearly demonstrate student progress to parents.',
    icon: 'MessageSquareHeart',
  },
  {
    title: 'COMPETITIVE ADVANTAGE',
    subtitle: 'National-Level Authority',
    desc: 'Offer a genuine All-India test experience that sets your tuition point far ahead of traditional neighbourhood coaching classes.',
    icon: 'Medal',
  },
  {
    title: 'SCALABLE MODEL',
    subtitle: 'Expand Without CapEx',
    desc: 'Grow your centre’s academic capacity and enrol more students for Sainik School exams without opening another physical branch.',
    icon: 'TrendingUp',
  },
];
