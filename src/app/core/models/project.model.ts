export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight: boolean;
}
