import * as Api from "../../Api/Api.js";
import "./Home.scss";
import HomeHero from "../../components/HomeHero/HomeHero";
import BrowseArticles from "../../components/BrowseArticles/BrowseArticles";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Api.getArticles().then((result) => {
      setArticles(result);
    });
  }, []);

  console.log(articles);
  return (
    <>
      <HomeHero />
      <BrowseArticles articles={articles} />
    </>
  );
};

export default Home;
