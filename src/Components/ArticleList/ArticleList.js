import React from "react";
import Article from "../Article/Article";
import "./ArticleList.css";

function ArticleList(props) {
  return (
    <div className="ArticleList">
      {props.data.map((objet) => (
        <Article key={objet.id} article={objet} />
      ))}
    </div>
  );
}

export default ArticleList;
