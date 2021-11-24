import CardC from "./CardC";
import { useState, useEffect } from "react";
import Fetchs from "../services/Fetchs";

export default function ContentC() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Fetchs.getData("/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => alert(err.message+" - Failed to fetch data"))
    return () => {};
  }, []);

  return (
    <>
      <div className="row">
        {articles.map((article, i) => (
          <div key={i} className="col-md-4 mb-4">
            <CardC article={article}></CardC>
          </div>
        ))}
      </div>
    </>
  );
}
