import React from "react";
import './Card.css';
import VerifyCard from '../components/VerifyCard';

import "bootstrap/dist/css/bootstrap.min.css";
import "./styless.scss";

function Card() {

    const cards = [
        {
          id: "1",
          variant: "click",
          front: "front",
          back: "Back"
        }
      ];
      
    return (
        <div className="card-bg-image">
            <h1 className="card-page-title">Vaccine Card</h1>
            <div>
                <div>
                    {cards.map((card) => (
                        <VerifyCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;