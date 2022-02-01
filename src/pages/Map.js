import React from 'react';
import "./Map.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { ListItems } from '../components/ListItems';
import LocationList from '../components/LocationList.js';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "720px",
    width: "100%"};
  
  const defaultCenter = {
    lat: 46.813877, lng: -71.207977
  }

  const [isClicked, setIsClicked] = React.useState(false)

  function handleClick () {
      setIsClicked(!isClicked)
  }
  
  return (
      <div>

      {/* Google Map */}
        <div onClick={handleClick} className={isClicked && 'show-list-button-display-none'}>
            <LoadScript
            googleMapsApiKey=''>
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                />
            </LoadScript>
        </div>

        {/* List Button */}
        <div className='flex justify-center'>
            <button onClick={handleClick} className={isClicked? 'show-list-button-display-none' : 'show-list-button'}><strong>Show List</strong></button>
        </div>
        <div className={isClicked? 'hide-list-button-bar' : 'show-list-button-display-none'}>
            <div className='flex justify-center'>
                <button onClick={handleClick} className={isClicked? 'show-list-button  hide-list-button' : 'show-list-button-display-none'}><strong>Hide List</strong></button>
            </div>
        </div>

        {/* List Content */}
        <div className={!isClicked? 'show-list-button-display-none' : 'list-content-top-padding'}>
            <hr className='list-horizontal-line' />

            {ListItems.map(location => 
                    <LocationList key={location.id} id={location.id} name={location.name} people={location.people} distance={location.distance} hours={location.hours} address={location.address} tel={location.tel} details={location.details} />)}
        </div>

     </div>
  )
}

export default MapContainer;