import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import { ArticleContext } from "../../App";

function ShowArticle() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [articles, setArticles] = useContext(ArticleContext);
  const indexArticle = articles.findIndex((art) => art.id === Number(id));

  const deleteArticle = async (id) => {
    if (window.confirm("Vouler-vous vraiment supprimer l'article") === true) {
      const newData = [...articles];
      const response = await API.deleteArticle(id);
      const articleIndex = articles.findIndex((art) => art.id === Number(id));
      const removedArticle = newData.splice(articleIndex, 1);
      setArticles(newData);
      console.log("Deleted Article", response, removedArticle);
      navigate("/");
    } else {
      navigate(`/article/${id}`);
    }
  };

  return (
    <div className="container w-50 m-auto mt-2">
      <img src={articles[indexArticle].image} alt="" />
      <h1>{articles[indexArticle].title}</h1>
      <p>{articles[indexArticle].content}</p>
      <Link to={`/article/edit/${articles[indexArticle].id}`}>
        <button className="btn btn-warning me-3">Modifier</button>
      </Link>
      <Link to="/">
        <button className="btn btn-secondary me-3">Retour</button>
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => deleteArticle(articles[indexArticle].id)}
      >
        Supprimer
      </button>
    </div>
  );
}

export default ShowArticle;
