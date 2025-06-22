export interface CourseModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

export interface CourseWeek {
  id: number;
  weekNumber: number;
  title: string;
  lessons: CourseLesson[];
  expectedOutcomes: string[];
  icon: string;
}

export interface CourseLesson {
  id: number;
  lessonNumber: number;
  title: string;
  description?: string;
  duration?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  duration: string;
  features: string[];
  popular: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string[];
}