import { useEffect, useState } from "react";

const useArticle = (filter) => {
  const [articles, setArticles] = useState([]);
  console.log(filter);

  useEffect(() => {
    const getArticle = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/Shahed007/asets/main/article.json"
      );
      const data = await res.json();
      setArticles(data);
    };
    getArticle();
  }, []);

  if (filter.toLowerCase() === "all") {
    return [articles, articles.length];
  } else {
    const filterArticles = articles.filter(
      (article) => article.category === filter.toLowerCase()
    );
    return [filterArticles, articles.length];
  }
};

export default useArticle;
