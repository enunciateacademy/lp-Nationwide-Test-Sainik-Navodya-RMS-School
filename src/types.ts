export interface PartnerLeadForm {
  centreName: string;
  ownerName: string;
  mobile: string;
  whatsapp: string;
  city: string;
  state: string;
  studentCount: string;
  examsTaught: string[];
  hasSainikCoaching: 'Yes' | 'No';
  message: string;
}

export interface LeaderboardEntry {
  rank: number;
  studentName: string;
  centreName: string;
  city: string;
  state: string;
  score: number;
  totalMarks: number;
  percentage: number;
  percentile: number;
  badge?: string;
  category: 'Class 6' | 'Class 9';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  centreName: string;
  location: string;
  quote: string;
  studentsCount: string;
  partnerSince: string;
  isDemo: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
  samplePreviewTitle?: string;
  previewDetails?: string[];
}
