import "./ForumPostMain.scss";

const ForumPostMain = (props) => {
  const post = props.post;

  return (
    <article className="forumPostMain">
      <div className="forumPostMain__details">
        <p>
          {post.postDate}
          <br></br>
          <br></br>
          {post.authorName}
        </p>
        <div className="forumPostMain__image"></div>
      </div>
      <p className="forumPostMain__body">{post.postBody}</p>
    </article>
  );
};

export default ForumPostMain;
