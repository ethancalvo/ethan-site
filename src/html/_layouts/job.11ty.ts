import { dateToLocal } from "../../_11tyCommon/DateToLocal";
import { Job as iJob } from "./EtSiteTypes";

class Job {
  data(): object {
    return {
      layout: "default",
      styles: ["jobs.css"],
    };
  }

  render(jb: iJob): string {
    let endDate: string = "Present";
    if (jb.end) {
      endDate = dateToLocal(jb.end);
    }
    let responseString: string = jb.responsibilities
      .map((r: string) => {
        return `<li>${r}</li>`;
      })
      .join("");

    let musings = "";
    if (jb.content) {
      musings = `<section class="musings">${jb.content}</section>`;
    }

    return `<h2>${jb.jobTitle}</h2>
        <div class="company">${jb.company}</div>
        <div class="job-dates">${dateToLocal(jb.start)} to ${endDate}</div>
        <section class="summary">${jb.summary}</section>
        <section class="responsibilities">
            <ul>${responseString}</ul>
        </section>
        ${musings}
    `;
  }
}
module.exports = Job;
