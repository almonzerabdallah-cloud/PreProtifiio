export interface Skill {
  name: string;
  icon: JSX.Element;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
}
