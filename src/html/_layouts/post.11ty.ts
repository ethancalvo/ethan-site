import { dateToLocal } from "../../_11tyCommon/DateToLocal";
import { Post as iPost } from "./EtSiteTypes";

class Post {
  data(): object {
    return {
      layout: "default",
      styles: ["posts.css"],
    };
  }

  render(post: iPost): string {
    let musings = "";
    if (post.content) {
      musings = `<section class="musings">${post.content}</section>`;
    }

    return `<h2>${post.title}</h2>
        <section class="summary">${post.summary}</section>
        ${musings}
    `;
  }
}
module.exports = Post;
