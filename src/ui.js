import xss from "xss-filters";

let ui = {
  renderPosts(posts){
    let target = document.querySelector(".container");

    let elements = posts.map( (post) => {
      let { title, lastReply } = post;
      return articleTag(title, lastReply);
    });

    target.innerHTML = elements.join("");
  },

  renderUsers(users){
    let target = document.querySelector(".sidebar-content");

    let elements = users.map( (user) => {
      let { name, avatar } = user;
      return userTag(name, avatar);
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

function userTag(name, avatar){
  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);

  let template = `
    <div class='active-avatar'>
      <img width="54" src="assets/images/${safeAvatar}" />
      <h5 class='post-author'>${safeName}</h5>
    </div>`;

  return template;
}

export default ui;
