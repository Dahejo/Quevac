import React from 'react';
import "./TestCard.css";


function TestCard ({result, place, date}) {
    
    let positive;

    if (result) {
        positive = "Negative";
    } else {
        positive = "Positive";
    }

    return (
        <div className='testcard-container'>
            <div className='flex align-center'>
                <i className={result ? "testcard-icon fas fa-circle fa-sm green" : "testcard-icon fas fa-circle fa-sm red"} ></i>
                <p className='padding-left-12 no-margin'>{positive}</p>
            </div>
            <div>
                <p className='text-right no-margin'>{date}</p>
            </div>
        </div>
    );
}

export default TestCard;