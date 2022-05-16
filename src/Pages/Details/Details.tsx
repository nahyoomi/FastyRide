import React, { useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Layout from '../../Components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Details.module.scss'
import Weather from '../../Components/Weather/Weather';

const containerStyle = {
  width: '90%',
  height: '300px', 
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Details() {
  
  return (
    <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.allDetails}>
        <div className={styles.background}></div>
        <div className={styles.placeDetails}>
          <div className={styles.chart}>
            <p className={styles.place}>Place<span className={styles.rate}><FontAwesomeIcon icon={faStar} />4.5</span></p>
            <p className={styles.location}>Location</p>
            <p className={styles.description}>Description about the location where we are waiting for the api, in order to confirm.</p>
            <div className={styles.more}>
              <Weather />
            </div>
            
          </div>
        </div>
        </div>
        <div className={styles.map}>
          <LoadScript
          googleMapsApiKey="AIzaSyCTP-QHMC05OTLZHIsp08JcK975S44vCDQ">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}>
          </GoogleMap>
        </LoadScript>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Details