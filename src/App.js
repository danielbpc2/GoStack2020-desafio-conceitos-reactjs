import React, { useState, useEffect } from "react";
import {
  getRepositories,
  addRepository,
  removeRepository,
} from "./services/api";
import RepositoryList from "./components/RepositoryList";
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories().then((response) => {
      setRepositories(response);
    });
  }, []);

  async function handleAddRepository() {
    const repo = {
      url: "https://github.com/rocketseat-education/bootcamp-gostack-desafios/blob/master/desafio-conceitos-reactjs/README.md",
      title: `Repo do desafio ReactJS`,
      techs: ["React", "Node.js"],
    };
    const response = await addRepository(repo);

    setRepositories([...repositories, response]);
  }

  async function handleRemoveRepository(id) {
    const responseStatus = await removeRepository(id);

    if (responseStatus === 204) {
      const updatedRepositories = repositories.filter(
        (repository) => repository.id !== id
      );
      setRepositories(updatedRepositories);
    }
  }

  return (
    <div>
      <RepositoryList
        repositories={repositories}
        handleRemoveRepository={handleRemoveRepository}
      />

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
