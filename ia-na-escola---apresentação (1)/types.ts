import { LucideIcon } from "lucide-react";

export enum SlideType {
  COVER = 'COVER',
  SECTION = 'SECTION', // Standard title + content
  LIST = 'LIST', // Title + Bullet points
  QUIZ = 'QUIZ', // Interactive component
  CONCLUSION = 'CONCLUSION'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string;
  bullets?: string[];
  icon?: LucideIcon;
  image?: string; // New property for slide images
  link?: string; // External link URL
  linkText?: string; // Text for the link button
  authors?: string[];
  advisor?: string; // Professor Orientador
  location?: string; // City/State
  schoolInfo?: {
    name: string;
    course: string;
    year: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}