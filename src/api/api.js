export class API {
  static getArticles() {
    return fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static getArticleById(id) {
    return fetch(`http://127.0.0.1:8000/api/articles/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static updateArticle(article) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    }).then((response) => response.json());
  }

  static createArticle(article) {
    return fetch(`http://127.0.0.1:8000/api/articles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    }).then((response) => response.json());
  }

  static deleteArticle(id) {
    return fetch(`http://127.0.0.1:8000/api/articles/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  static loadFile(id, formData) {
    return fetch(`http://127.0.0.1:8000/api/articles/${id}/save_file/`, {
      method: "POST",
      body: formData,
    }).then((response) => response);
  }
}
