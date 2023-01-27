"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateToLocal_1 = require("../_11tyCommon/DateToLocal");
class Jobs {
    constructor() {
        this.dateToLocal = DateToLocal_1.dateToLocal;
    }
    data() {
        return {
            layout: "default",
            styles: ["jobs.css"],
        };
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
        <a class="job-title" href="${jbData.url}">${job.jobTitle} | ${job.company}</a>
        <div class="job-dates">${THIS.dateToLocal(job.start)} to ${endDate}</div>
        <div class="summary">${job.summary}</div>
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
