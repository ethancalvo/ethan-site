import { dateToLocal } from "../../_11tyCommon/DateToLocal";
class Job {
  data(): object {
    return {
      layout: "default",
      styles: ["jobs.css"],
    };
  }

  render(page: any): string {
    let endDate: string = "Present";
    if (page.end) {
      endDate = dateToLocal(page.end);
    }
    let resps: string = page.responsibilities
      .map((resp: string) => {
        return `<li>${resp}</li>`;
      })
      .join("");

    let musings = "";
    if (page.content) {
      musings = `<section class="musings">${page.content}</section>`;
    }

    return `<h2>${page.jobTitle}</h2>
        <div class="job-dates">${dateToLocal(page.start)} to ${endDate}</div>
        <section class="summary">${page.summary}</section>
        <section class="responsibilities">
            <ul>${resps}</ul>
        </section>
        ${musings}
    `;
  }
}
module.exports = Job;
