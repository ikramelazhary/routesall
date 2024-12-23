import React, { useState } from "react";

const Comp3 = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche
  const [results, setResults] = useState([]); // Résultats de recherche
  const [isSearched, setIsSearched] = useState(false); // Indicateur de recherche

  // Liste des salariés
  const salaries = [
    {
      id: 1,
      nom: "Alami",
      prenom: "Sara",
      fonction: "Technicien",
      service: "Informatique",
    },
    {
      id: 2,
      nom: "Hilali",
      prenom: "Hamza",
      fonction: "Analyste",
      service: "Finance",
    },
    {
      id: 3,
      nom: "Chamss",
      prenom: "Nabil",
      fonction: "Manager",
      service: "Ressources Humaines",
    },
    {
      id: 4,
      nom: "Alami",
      prenom: "Ahmed",
      fonction: "Assistant",
      service: "Marketing",
    },
  ];

  const handleSearch = () => {
    setIsSearched(true); // Indiquer qu'une recherche a été effectuée

    // Vérifier si le champ de recherche est vide
    if (searchTerm.trim() === "") {
      setResults([]); // Ne rien afficher si le champ est vide
      return;
    }

    // Filtrer les salariés par service correspondant au terme de recherche
    const filteredSalaries = salaries.filter((salarie) =>
      salarie.service.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredSalaries);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#939F5C", marginBottom: "20px" }}>
          Recherche par service
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="search" style={{ fontWeight: "bold" }}>
            Entrez le nom du service :
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginLeft: "10px",
              padding: "10px",
              width: "calc(100% - 150px)",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "#939F5C",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Chercher
          </button>
        </div>

        <h2 style={{ color: "#333", marginBottom: "20px" }}>Résultat</h2>
        {isSearched && results.length === 0 && (
          <p style={{ color: "#888" }}>
            Aucun salarié n'est affecté à ce service.
          </p>
        )}
        {results.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              textAlign: "left",
            }}
          >
            {results.map((salarie) => (
              <li
                key={salarie.id}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: "#fefefe",
                }}
              >
                <strong>Nom :</strong> {salarie.nom}, <strong>Prénom :</strong>{" "}
                {salarie.prenom}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comp3;
