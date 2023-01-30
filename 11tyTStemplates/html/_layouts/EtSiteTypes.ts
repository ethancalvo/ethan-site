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
