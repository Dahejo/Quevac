import React from "react";
import './Card.css';

function Card() {
    return (
        <div className="card-bg-image">
            <h1 className="card-page-title">Vaccine Card</h1>
            <div className="vaccine-card">
                <h3 className="card-title">COVID-19 Immunization Record</h3>
            </div>
        </div>
    )
}

export default Card;