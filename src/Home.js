import React, { useState } from 'react';
import './home.css';

const translations = {
    en: {
        welcomeTitle: "Welcome to My React Quest",
        welcomeDescription: "Discover powerful tools to enhance your productivity and knowledge: simplify math with the Calculator, stay organized with the Tasks App, explore countries and capitals with World Geography, test your flag knowledge with Flags & Countries, and manage your profiles securely with the Profile Manager—all in one seamless experience! ",
        projects: [
            { description: "Simplify complex calculations with ease." },
            { description: "Manage your personal, work, and social media profiles efficiently." },
            { description: "Explore the globe! Learn about countries, capitals, and continents." },
            { description: "Stay organized and productive! Manage tasks." }
        ]
    },
    fr: {
        welcomeTitle: "Bienvenue dans Ma Quête React",
        welcomeDescription: "Découvrez des outils puissants pour améliorer votre productivité et vos connaissances : simplifiez les calculs avec la Calculatrice, restez organisé avec l'Application de Tâches, explorez les pays et les capitales avec la Géographie Mondiale, testez vos connaissances des drapeaux avec Drapeaux & Pays, et gérez vos profils en toute sécurité avec le Gestionnaire de Profils — tout cela dans une expérience fluide !",
        projects: [
            { description: "Simplifiez les calculs complexes avec facilité." },
            { description: "Gérez efficacement vos profils personnels, professionnels et sociaux." },
            { description: "Explorez le globe ! Découvrez les pays, les capitales et les continents." },
            { description: "Restez organisé et productif ! Gérez vos tâches." }
        ]
    },
    es: {
        welcomeTitle: "Bienvenido a Mi Búsqueda React",
        welcomeDescription: "Descubre herramientas poderosas para mejorar tu productividad y conocimiento: simplifica los cálculos con la Calculadora, mantente organizado con la Aplicación de Tareas, explora países y capitales con Geografía Mundial, pon a prueba tu conocimiento de banderas con Banderas y Países, y gestiona tus perfiles de forma segura con el Gestor de Perfiles — todo en una experiencia perfecta.",
        projects: [
            { description: "Simplifica cálculos complejos con facilidad." },
            { description: "Administra tus perfiles personales, laborales y sociales de manera eficiente." },
            { description: "¡Explora el mundo! Aprende sobre países, capitales y continentes." },
            { description: "¡Mantente organizado y productivo! Gestiona tareas." }
        ]
    }
};

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');

    const { welcomeTitle, welcomeDescription, projects } = translations[language];

    const projectData = [
        { id: 1, image: require("./assets/images/clc22.png") },
        { id: 2, image: require("./assets/images/profiles.png") },
        { id: 3, image: require("./assets/images/world2.png") },
        { id: 4, image: require("./assets/images/todolister2.png") }
    ];

    return (
        <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <span className="slider"></span>
                </label>
                <span>{darkMode ? '🌙' : '🌞'}</span>
            </div>

            <div className="language-buttons">
                <button onClick={() => setLanguage('en')}>EN</button>
                <button onClick={() => setLanguage('fr')}>FR</button>
                <button onClick={() => setLanguage('es')}>ES</button>
            </div>

            <div className="welcome-section">
                <h1 className="welcome-title">{welcomeTitle}</h1>
                <p className="welcome-description">{welcomeDescription}</p>
            </div>

            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
                        <p className="project-description">{projects[index].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
