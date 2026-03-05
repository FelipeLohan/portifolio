export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  current: boolean;
  location?: string;
  type?: string;
}
