import React from 'react'
import './LocationList.css'

function LocationList({name,people,distance,hours,address,tel,details}) {
    return (
        <div>

            {/* list content and reserve button */}
            <div className='flex justify-sp-evenly'>
                <div className='location-list-content'>
                    <strong>{name}</strong><br />
                    {people} people | {distance} km | {hours}<br />
                    {address}<br />
                    {tel}<br />
                    {details}<br />
                </div>
                <button className='reserve-button'>Reserve</button>
            </div>

            <hr className='list-horizontal-line' />
        </div>
    )
}

export default LocationList;