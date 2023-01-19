import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { API } from "../../api/api";
import { variables } from "../../Variables";

function AddArticle(props) {
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs.current[0].value);
    console.log(inputs.current[1].value);
    console.log(inputs.current[2].files[0]);
    let art = {
      title: inputs.current[0].value,
      content: inputs.current[1].value,
      image: "",
    };
    const createdArticle = await API.createArticle(art);
    const formData = new FormData();
    formData.append(
      "file",
      inputs.current[2].files[0],
      inputs.current[2].files[0].name
    );
    const file_name = await API.loadFile(createdArticle.id, formData);
    console.log(file_name);
    createdArticle.image =
      variables.IMAGE_URL + inputs.current[2].files[0].name;
    const updatedArticle = await API.updateArticle(createdArticle);
    console.log(updatedArticle);
  };
  return (
    <div className="container w-50 m-auto">
      <h1>Ajout d'un Article</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={addInputs}
          className="form-control mt-3"
          type="text"
          name="title"
          placeholder="Le titre de l'article"
        />
        <textarea
          ref={addInputs}
          className="form-control mt-3"
          name="content"
          cols="30"
          rows="6"
          placeholder="Le contenu de l'article"
        ></textarea>
        <input ref={addInputs} type="file" className="form-control mt-3" />
        <button className="btn btn-primary me-3 mt-3" type="submit">
          Valider
        </button>
        <Link to="/">
          <button className="btn btn-danger mt-3">Retour</button>
        </Link>
      </form>
    </div>
  );
}

export default AddArticle;
