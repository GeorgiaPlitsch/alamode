import * as Api from "../../Api/Api.js";
import "./Home.scss";
import HomeHero from "../../components/HomeHero/HomeHero";
import NewestArticle from "../../components/NewestArticle/NewestArticle";
import BrowseArticles from "../../components/BrowseArticles/BrowseArticles";

import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);

  const contentDivRef = useRef();

  const handleClick = () => {
    contentDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    Api.getArticles().then((result) => {
      setArticles(result);
    });
  }, []);

  return (
    <>
      <HomeHero buttonClick={handleClick} />
      <NewestArticle refProp={contentDivRef} allArticles={articles} />
      <BrowseArticles articles={articles} />
    </>
  );
};

export default Home;
