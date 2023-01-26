"use strict";
class Jobs {
    data() {
        return {
            layout: "default",
            styles: ["jobs.css"],
        };
    }
    dateToLocal(dt) {
        let nd = new Date(dt.valueOf());
        nd.setDate(nd.getDate() + 1);
        return nd.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
        });
    }
    render(data) {
        let THIS = this;
        data.collections.job.sort((a, b) => {
            let jobA = a.data;
            let jobB = b.data;
            return jobB.start.valueOf() - jobA.start.valueOf();
        });
        let liMap = data.collections.job.map((jbData, idx) => {
            let job = jbData.data;
            let endDate = "Present";
            if (job.end) {
                endDate = THIS.dateToLocal(job.end);
            }
            return `<li class="job">
        <h3 class="job-title">${job.jobTitle} | ${job.company}</h3>
        <div class="job-dates">${THIS.dateToLocal(job.start)} TO ${endDate}</div>
        <div class="job-summary">${jbData.templateContent}</div>
        </li>`;
        });
        return `<h2>Jobs</h2>
    <ul class="job-list">
      ${liMap.join("")}
    </ul>
    `;
    }
}
module.exports = Jobs;
