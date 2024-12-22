import React, { useState } from 'react';

const Comp2 = () => {
  // Nouvelles données fictives pour les employés
  const [salaries] = useState([
    {
      id: 1,
      nom: 'Alami',
      prenom: 'Sara',
      fonction: 'Technicien',
      service: 'Informatique',
    },
    {
      id: 2,
      nom: 'Hilali',
      prenom: 'Hamza',
      fonction: 'Analyste',
      service: 'Finance',
    },
    {
      id: 3,
      nom: 'Chamss',
      prenom: 'nabil',
      fonction: 'Manager',
      service: 'Ressources Humaines',
    },
    {
      id: 4,
      nom: 'Alami',
      prenom: 'Ahmed',
      fonction: 'Assistant',
      service: 'Marketing',
    },
  ]);

  return (
    <div>
      <h1 align='center'>Liste des Salariés</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid black' }}>
            <th style={styles.th}>Nom</th>
            <th style={styles.th}>Prénom</th>
            <th style={styles.th}>Fonction</th>
            <th style={styles.th}>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salarie) => (
            <tr
              key={salarie.id}
              style={{
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <td style={styles.td}>{salarie.nom}</td>
              <td style={styles.td}>{salarie.prenom}</td>
              <td style={styles.td}>{salarie.fonction}</td>
              <td style={styles.td}>{salarie.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    padding: '10px',
    borderBottom: '2px solid black',
    fontWeight: 'bold',
  },
  td: {
    padding: '10px',
  },
};

export default Comp2;
