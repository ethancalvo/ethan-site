import { Post, PostCollectionObject } from "./EtSiteTypes";

import { dateToLocal } from "../../_11tyCommon/DateToLocal";

class Posts {
  data(): object {
    return {
      layout: "default",
      styles: ["posts.css"],
    };
  }
  dateToLocal = dateToLocal;

  render(data: any): string {
    let THIS = this;
    data.collections.post.sort(
      (a: PostCollectionObject, b: PostCollectionObject) => {
        let postA: Post = a.data;
        let postB: Post = b.data;
        return postB.title > postA.title ? 1 : -1;
      }
    );
    let liMap = data.collections.post.map(
      (postData: PostCollectionObject, idx: number): string => {
        let post: Post = postData.data;
        return `<li class="post fancy">
        <a class="post-title" href="${postData.url}">${post.title}</a>
        
        <div class="summary">${post.summary}</div>
        </li>`;
      }
    );
    return `<h2>Posts</h2>
    <ul class="post-list">
      ${liMap.join("")}
    </ul>
    `;
  }
}

module.exports = Posts;
