import { Job, JobCollectionObject } from "./EtSiteTypes";

import { dateToLocal } from "../../_11tyCommon/DateToLocal";

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
      (a: JobCollectionObject, b: JobCollectionObject) => {
        let jobA: Job = a.data;
        let jobB: Job = b.data;
        return jobB.start.valueOf() - jobA.start.valueOf();
      }
    );
    let liMap = data.collections.job.map(
      (jbData: JobCollectionObject, idx: number): string => {
        let job: Job = jbData.data;
        let endDate: string = "Present";
        if (job.end) {
          endDate = THIS.dateToLocal(job.end);
        }
        return `<li class="job fancy">
        <a class="job-title" href="${jbData.url}">${job.jobTitle}</a>
        <div class="company sub-title">${job.company}</div>
        <div class="job-dates">${THIS.dateToLocal(
          job.start
        )} to ${endDate}</div>
        <div class="summary">${job.summary}</div>
        </li>`;
      }
    );
    return `<h2>Work History</h2>
    <ul class="job-list">
      ${liMap.join("")}
    </ul>
    `;
  }
}

module.exports = Jobs;
