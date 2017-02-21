import xss from "xss-filters";

let ui = {
  renderPosts(posts){
    let target = document.querySelector(".container");

    let elements = posts.map( (post) => {
      let { title, lastReply } = post;
      return articleTag(title, lastReply);
    });

    target.innerHTML = elements.join("");
  }
}

function articleTag(title, lastReply){
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);

  let template = `
    <article class='post'>
      <h2 class='post-title'>
        ${safeTitle}
      </h2>
      <p class='post-meta'>
        last reply on ${safeLastReply}
      </p>
    </article>`;

  return template;
}

export default ui;
