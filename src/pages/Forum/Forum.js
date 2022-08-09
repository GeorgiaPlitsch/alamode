import { v4 as uuid } from "uuid";
import * as Api from "../../Api/Api.js";
import ForumCard from "../../components/ForumCard/ForumCard.js";
import React, { useEffect, useState } from "react";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Api.getForumPosts().then((result) => {
      setPosts(result);
    });
  }, []);

  const cards = [];

  posts.forEach((post) => {
    if (!post) {
      return;
    }
    cards.push(<ForumCard key={uuid()} post={post} />);
  });

  return (
    <section className="forum">
      <h2 className="forum__header">Articles</h2>
      <div className="forum__cards">{cards}</div>
    </section>
  );
};

export default Forum;
