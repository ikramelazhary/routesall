import React from 'react';
import './notfound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-heading">404 - Page Not Found</h1>
      <p className="notfound-paragraph">
      Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="notfound-button">
      Return to Home
      </a>
    </div>
  );
}
