import React, { useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import { ArticleContext } from "../../App";

function ArticleForm() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [articles, setArticles] = useContext(ArticleContext);
  const articleIndex = articles.findIndex((el) => el.id === Number(id));
  const [article, setArticle] = useState(articles[articleIndex]);
  const handleChange = (e) => {
    let newArticle = { ...article };
    if (e.target.name === "title") {
      newArticle.title = e.target.value;
    } else {
      newArticle.content = e.target.value;
    }
    setArticle(newArticle);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newData = [...articles];
    let art = await API.updateArticle(article);
    newData.splice(articleIndex, 1, art);
    setArticles(newData);
    navigate(`/article/${id}`);
  };
  return (
    <div className="container w-50 m-auto">
      <h1>Modification de l'Article N°{id}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control mt-3"
          type="text"
          name="title"
          value={article.title}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className="form-control mt-3"
          name="content"
          cols="30"
          rows="6"
          value={article.content}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button className="btn btn-primary me-3 mt-3" type="submit">
          Valider
        </button>
        <Link to={`/article/${article.id}`}>
          <button className="btn btn-danger mt-3">Retour</button>
        </Link>
      </form>
    </div>
  );
}

export default ArticleForm;
