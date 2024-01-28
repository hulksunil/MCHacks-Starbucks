import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const containerStyle = {
  width: '800px',
  height: '600px'
};

function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDbxNF5iicG8juoE5DVNsnZ4ze85I3AxuQ"
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null);
  const [address, setAddress] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      // Fetch 5 nearby police stations
      const placesService = new window.google.maps.places.PlacesService(map);
      placesService.nearbySearch({
        location: selectedLocation,
        radius: 5000, // 5 kilometers radius
        type: 'police'
      }, (results, status) => {
        if (status === 'OK') {
          setPoliceStations(results.slice(0, 5)); // Get only the first 5 results
        }
      });
    }
  }, [selectedLocation, map]);

  const handleSelect = async (value) => {
    setAddress(value);
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setCenter(latLng);
      setSelectedLocation(latLng);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const getStationDetails = (placeId) => {
    const placesService = new window.google.maps.places.PlacesService(map);
    placesService.getDetails({ placeId: placeId }, (place, status) => {
      if (status === 'OK') {
        setSelectedStation(place);
      }
    });
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance.toFixed(2); // Round to 2 decimal places
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return isLoaded ? (
    <div>

    <h2 style={{ color: 'grey', marginBottom:'10px' }} >Get started. Find the nearest police stations.</h2>


      <h3 style={{ color: 'white' }}>Enter Location:</h3>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter a location' })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div style={{ marginBottom: 20 }}></div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center || { lat: -3.745, lng: -38.523 }} // Default center if not provided
        zoom={center ? 12 : 4} // Adjust zoom level based on whether center is set
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
        {policeStations.map((station, index) => (
          <Marker
            key={index}
            position={{ lat: station.geometry.location.lat(), lng: station.geometry.location.lng() }}
            onClick={() => getStationDetails(station.place_id)}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/police.png', // Custom police station icon
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}
        {selectedStation && (
          <InfoWindow
            position={{ lat: selectedStation.geometry.location.lat(), lng: selectedStation.geometry.location.lng() }}
            onCloseClick={() => setSelectedStation(null)}
          >
            <div>
              <h3>{selectedStation.name}</h3>
              <p>{selectedStation.formatted_phone_number}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      {policeStations.length > 0 && (
        <div style={{ marginTop: 20, color: 'white' }}>

          <h3>Nearest Police Stations:</h3>
          <br></br>
          <table style={{width:'100%'}}>
            <thead>
              <tr>
                <th style={{fontSize:20}}>Name</th>
                <th>    </th>
                <th style={{fontSize:20}}>Distance (km)</th>

              </tr>
            </thead>
            <tbody>
              {policeStations.map((station, index) => (
                <tr key={index}>
                  <td>{station.name}</td>
                  <td>   </td>
                  <td>{calculateDistance(selectedLocation.lat, selectedLocation.lng, station.geometry.location.lat(), station.geometry.location.lng())}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  ) : <></>;
}

export default React.memo(MapContainer);
