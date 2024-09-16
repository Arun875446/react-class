// https://api.spaceflightnewsapi.net/v4/articles

import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import axios from "axios";

const UseEffectArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log("home", articles);
  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => setArticles(response.data.results))

      .catch((error) => (console.log(error), setError(true)))
      .finally(() => setLoading(false));
    console.log("useEffect", articles);
  }, []);
  return (
    <div>
      {error && <Error />}
      {loading && <Loading />}
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default UseEffectArticle;
