import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Article.css";

export default function Article(props) {
  const [compteur, setCompteur] = useState(0);
  const increment = () => {
    setCompteur(compteur + 1);
  };
  return (
    <div className="Article">
      <Link
        to={{ pathname: `article/${props.article.id}` }}
        key={props.article.id}
      >
        <img className="img" src={props.article.image} alt="" />
      </Link>
      <h1>{props.article.title}</h1>
      <p>{props.article.content.substring(0, 100)}</p>
      <button onClick={increment}>{compteur}</button>
    </div>
  );
}
