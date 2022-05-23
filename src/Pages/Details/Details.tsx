import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Details.module.scss'
import Weather from '../../Components/Weather/Weather';
import { useParams } from 'react-router-dom';
import { getPlaceById,getPlacePhotos } from '../../Utils/Service';
import   { PlaceInterface } from "../../Interfaces/Place"
import Map from '../../Components/Map/Map';



function Details() {

  let { id  }  = useParams();
  const [placeDetails, setPlaceDetails]: any = useState<any>/* <Array<PlaceInterface>> */([]) 
  const [placePhoto, setPlacePhoto] = useState<any>/* <Array<PlaceInterface>> */([])

  useEffect(() => {
    
    /* console.log("id:",id) */
    getPlacePhotos(id)
    .then(res => {
      /* console.log("response photo:",res) */
      setPlacePhoto(res)
      /* console.log("placePhoto:",placePhoto) */
    })
  .catch(err => console.error(err));

  getPlaceById(id)
  .then(res => {
   /*  console.log("response details:",res) */
    setPlaceDetails(res)
    /* console.log("placedetails:",placeDetails) */
  })
.catch(err => console.error(err));

  },[placePhoto])

  useEffect(() => {
    /* console.log("id:",id) */
   

  },[])
  
    return (
      <>
      <Layout>
        { placePhoto <= 0 
          ? <p> Loadding....</p>
          :  
          <div className={styles.container}>
            <div className={styles.allDetails}>
            <div className={styles.background}>
              <img 
              src= {`${placePhoto[0].prefix}500x500${placePhoto[0].suffix}` } alt={placeDetails.name} />
            </div>
            <div className={styles.placeDetails}>
              <div className={styles.chart}>
                <p className={styles.place}> {placeDetails.name} <span className={styles.rate}><FontAwesomeIcon icon={faStar} />4.5</span></p>
                <p className={styles.location}>{placeDetails.location.locality}</p>
                <p className={styles.description}> {placeDetails.location.formatted_address}</p>
                <div className={styles.more}>
                  <Weather />
                </div>
                
              </div>
            </div>
            </div>
            <div className={styles.map}>
              <Map /*  placeDetails = {placeDetails} *//>
            </div>
          </div>
      }
       
      </Layout>
      </>
    )
 
}

export default Details