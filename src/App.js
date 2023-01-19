import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticleList from "./Components/ArticleList/ArticleList";
import NavBar from "./Components/NavBar/NavBar";

import ShowArticle from "./Components/ShowArticle/ShowArticle";
import ArticleForm from "./Components/ArticleForm/ArticleForm";
import AddArticle from "./Components/AddArticle/AddArticle";
import { API } from "./api/api";

export const ArticleContext = createContext();

function App() {
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.getArticles();
      setArticles(response);
      setData(response);
      console.log(
        "****initialisation de l'application dans le composant App****"
      );
    }
    fetchData();
  }, []);

  const handleSearch = (criteria) => {
    if (criteria === "") {
      setArticles(data);
    } else {
      let newArticles = data.filter((art) =>
        art.title.toLowerCase().startsWith(criteria.toLowerCase())
      );
      setArticles(newArticles);
    }
  };

  return (
    <div className="App">
      <ArticleContext.Provider value={[articles, setArticles, data]}>
        <BrowserRouter>
          <NavBar filter={handleSearch} />
          <Routes>
            <Route path="/" element={<ArticleList data={articles} />} />
            <Route path="article/:id" element={<ShowArticle />} />
            <Route path="article/edit/:id" element={<ArticleForm />} />
            <Route path="article/add" element={<AddArticle />} />
          </Routes>
        </BrowserRouter>
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
