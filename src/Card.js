import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="card-container">
      <div className="card text-bg-primary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-secondary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Secondary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-success mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

