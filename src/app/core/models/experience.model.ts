export interface Experience {
  id: string;
  company: string;
  logo?: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  current: boolean;
  location?: string;
  type?: string;
}
