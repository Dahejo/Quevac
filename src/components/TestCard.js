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
        // <div className='event-card event-card-border event-card-width overflow-hidden' onClick={isPast ? () => window.location.href='/events/'+id : undefined }>
        //     <div className='flex justify-center'>
        //         <img src={photo} alt='event-photo' width="110%" />
        //     </div>

        //     <div>
        //         <h6 className="margin-top-12px margin-left-12px margin-right-12px event-card-date-font">{place} | {date.toDateString()} {('0' + date.getHours()).slice(-2)}:{('0' + date.getMinutes()).slice(-2)}</h6>
        //         <h3 className='margin-left-12px margin-bottom-12px margin-right-12px event-card-title-font'>{name}</h3>
        //     </div>
        // </div>
        <div className='testcard-container'>
            <div className='flex align-center'>
                <i className={result ? "testcard-icon fas fa-circle fa-sm green" : "testcard-icon fas fa-circle fa-sm red"} ></i>
                <p className='padding-left-12'>{positive}</p>
            </div>
            <div>
                <p className='text-right'>{date}</p>
            </div>
        </div>
    );
}

export default TestCard;