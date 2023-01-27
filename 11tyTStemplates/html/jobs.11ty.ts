interface job {
  company: string;
  jobTitle: string;
  date: Date;
  start: Date;
  end: Date | null;
  summary: string;
  responsibilities: string[];
}
interface jobCollectionObject {
  data: job;
  url: string;
  templateContent: string;
}

import { dateToLocal } from "../_11tyCommon/DateToLocal";

class Jobs {
  data(): object {
    return {
      layout: "default",
      styles: ["jobs.css"],
    };
  }
  dateToLocal = dateToLocal;

  render(data: any): string {
    let THIS = this;
    data.collections.job.sort(
      (a: jobCollectionObject, b: jobCollectionObject) => {
        let jobA: job = a.data;
        let jobB: job = b.data;
        return jobB.start.valueOf() - jobA.start.valueOf();
      }
    );
    let liMap = data.collections.job.map(
      (jbData: jobCollectionObject, idx: number): string => {
        let job: job = jbData.data;
        let endDate: string = "Present";
        if (job.end) {
          endDate = THIS.dateToLocal(job.end);
        }
        return `<li class="job">
        <a class="job-title" href="${jbData.url}">${job.jobTitle} | ${
          job.company
        }</a>
        <div class="job-dates">${THIS.dateToLocal(
          job.start
        )} to ${endDate}</div>
        <div class="summary">${job.summary}</div>
        </li>`;
      }
    );
    return `<h2>Jobs</h2>
    <ul class="job-list">
      ${liMap.join("")}
    </ul>
    `;
  }
}

module.exports = Jobs;
