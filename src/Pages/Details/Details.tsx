import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../Contexts/DataContext';
import Layout from '../../Components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Details.module.scss'
import Weather from '../../Components/Weather/Weather';
import { useParams } from 'react-router-dom';
import { getPlaceById } from '../../Utils/Service';
import   { PlaceInterface } from "../../Interfaces/Place"
import Map from '../../Components/Map/Map';



function Details() {

  let { id  }  = useParams();
  const {placeDetails, setPlaceDetails}:any = useContext(AuthContext)

  useEffect(() => {
    
  getPlaceById(id)
  .then(res => {
    /* console.log("response details:",res) */
    setPlaceDetails(res)
    /* console.log("placedetails:",placeDetails) */
  })
.catch(err => console.error(err));

  },[])

  
    return (
      <>
      <Layout>
        { placeDetails <= 0 
          ? <p> Loadding....</p>
          :  
          <div className={styles.container}>
            <div className={styles.allDetails}>
            <div className={styles.background}>
              <img 
              src= {`${placeDetails.photos[0].prefix}500x500${placeDetails.photos[0].suffix}` } alt={placeDetails.name} />
            </div>
            <div className={styles.placeDetails}>
              <div className={styles.chart}>
                <p className={styles.place}> {placeDetails.name} <span className={styles.rate}><FontAwesomeIcon icon={faStar} /> {placeDetails.rating} </span></p>
                <p className={styles.location}>{placeDetails.location.locality}</p>
                <p className={styles.description}> {placeDetails.location.formatted_address}</p>
                <div className={styles.more}>
                  <Weather />
                </div>
                
              </div>
            </div>
            </div>
            <div className={styles.map}>
              <Map />
            </div>
          </div>
      }
       
      </Layout>
      </>
    )
 
}

export default Details