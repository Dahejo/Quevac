import React from 'react';
import { useState } from "react"; 
import cn from "classnames";

import "./VerifyCard.css";


function VerifyCard ({card}) {
    const [showBack, setShowBack] = useState(false); 

    function handleClick() { 
      if (card.variant === "click") { 
        setShowBack(!showBack); 
      } 
    } 

    return (
        <div className="flip-card-outer" onClick={handleClick}>
            <div className={cn("flip-card-inner", {showBack})}>
                <div className="card front verify-card-front">
                    <h3 className="card-title">COVID-19 Immunization Record</h3>
                    <div>
                        <p className="card-detail">Recived Shots: <strong>2</strong><br/>
                        Date: <strong>2021-10-19</strong><br/>
                        Verified by Quebec</p>
                    </div>
                    
                </div>
                <div className="card back vaccine-card-back">
                    <h3 className="card-title">COVID-19 Immunization Record</h3>
                    <h2 className="card-name">HEJIN JEONG</h2>
                    <p className="card-back-bt">back</p>
                </div>
            </div>
        </div>
    );
}

export default VerifyCard;