import React, { useState } from 'react';
import './profil.css'; // Assure-toi d'avoir ce fichier CSS

function Profils() {
  const [profils, setProfils] = useState([
    {
      nom: "Douae",
      age: 25,
      profession: "Développeuse",
      image: require("./assets/images/developpeuse.jpg"), // Image importée
    },
    {
      nom: "Sarah",
      age: 30,
      profession: "Architecte",
      image: require("./assets/images/architecte.jpg"), // Image importée
    },
  ]);

  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState(null); // Stocker le fichier image

  // Fonction pour ajouter un profil
  const ajouterProfil = (e) => {
    e.preventDefault();
    if (!nom || !age || !profession || !image) return;

    const nouveauProfil = { nom, age, profession, image };
    setProfils([...profils, nouveauProfil]);

    setNom('');
    setAge('');
    setProfession('');
    setImage(null); // Réinitialiser l'image après l'ajout
  };

  // Fonction pour afficher une alerte avec le nom du profil
  const afficherAlerte = (nom) => {
    alert(`Vous avez selectionner : ${nom}`);
  }; 
   // Fonction pour supprimer un profil
   const supprimerProfil = (index) => {
    const nouveauxProfils = profils.filter((_, i) => i !== index);
    setProfils(nouveauxProfils);
  };

  // Fonction pour gérer le changement de fichier image
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Prendre le premier fichier
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Convertir en URL et stocker
      };
      reader.readAsDataURL(file); // Lire le fichier comme URL
    }
  };

  return (
    <div className="cont">
      <h2 className="titre">Liste des Profils</h2>
      
      {/* Formulaire */}
      <form className="formulairee" onSubmit={ajouterProfil}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        /><br/>
        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="Profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        /><br/>
        {/* Input de type fichier pour télécharger l'image */}
        <input
          type="file"
          onChange={handleImageChange}
        /><br/>
        <button className='bnnt' type="submit">Ajouter Profil</button>
      </form>

      {/* Cartes des profils */}
      <div className="cards-containerr">
        {profils.map((profil, index) => (
          <div key={index} className="carded">
            <img src={profil.image} alt={profil.nom} />
            <div className="content">
              <h3>{profil.nom}</h3>
              <p>Âge : {profil.age}</p>
              <p>Profession : {profil.profession}</p>
            </div>

              <div className="actions">
              <button
                className="voir-plus"
                onClick={() => afficherAlerte(profil.nom)} // Appel de la fonction avec le nom
              >
                Voir Plus
              </button>
              <button
                className="supprimer"
                onClick={() => supprimerProfil(index)} // Supprimer le profil
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profils;
