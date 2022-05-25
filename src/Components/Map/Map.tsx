import React, { useContext, useEffect, useMemo } from 'react'
import { AuthContext } from '../../Contexts/DataContext';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};




function Map() {
  const {placeDetails, setPlaceDetails}:any = useContext(AuthContext)
  const center = useMemo(() => ({lat: placeDetails.geocodes.main.latitude, lng: placeDetails.geocodes.main.longitude}),[]) ;
 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCTP-QHMC05OTLZHIsp08JcK975S44vCDQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map:any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <Marker
      position={center}
      />
      </GoogleMap>
  ) : <></>
}

export default Map