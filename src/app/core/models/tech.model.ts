export type TechCategory = 'backend' | 'frontend' | 'database' | 'devops' | 'architecture';

export interface Tech {
  name: string;
  category: TechCategory;
  iconUrl?: string;
}
