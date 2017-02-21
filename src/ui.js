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
  let template = `
    <article class='post'>
      <h2 class='post-title'>
        ${title}
      </h2>
      <p class='post-meta'>
        last reply on ${lastReply}
      </p>
    </article>`;

  return template;
}

export default ui;
