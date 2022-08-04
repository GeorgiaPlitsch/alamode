import * as Api from "../../Api/Api.js";
import "./Home.scss";
import HomeHero from "../../components/HomeHero/HomeHero";
import NewestArticle from "../../components/NewestArticle/NewestArticle";
import BrowseArticles from "../../components/BrowseArticles/BrowseArticles";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Api.getArticles().then((result) => {
      setArticles(result);
    });
  }, []);

  return (
    <>
      <HomeHero />
      <NewestArticle allArticles={articles} />
      <BrowseArticles articles={articles} />
    </>
  );
};

export default Home;
