export interface Job {
  company: string;
  jobTitle: string;
  date: Date;
  start: Date;
  end: Date | null;
  summary: string;
  responsibilities: string[];
  content: string;
}
export interface JobCollectionObject {
  data: Job;
  url: string;
  templateContent: string;
}

export interface Post {
  title: string;
  summary: string;
  content: string;
}

export interface PostCollectionObject {
  data: Post;
  url: string;
  templateContent: string;
}
