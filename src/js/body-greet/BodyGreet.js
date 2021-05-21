import announcmentsCSS from "../../css/announcements.css";

export function BodyGreet(el) {
  el.innerHTML = "here is a demo announcement";
  el.classList.add("active");
  el.classList.add("l-announcements");
}
