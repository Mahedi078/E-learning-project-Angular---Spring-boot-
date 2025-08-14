export interface Question {
  id: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption?: string; // optional for frontend
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
