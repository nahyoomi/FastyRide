import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../../Contexts/DataContext';
import Layout from '../../Components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Details.module.scss'
import {  useParams } from 'react-router-dom';
import { getPlaceById } from '../../Utils/Service';
import Map from '../../Components/Map/Map';



function Details() {

  let { id }  = useParams();
  const {placeDetails, setPlaceDetails}:any = useContext(AuthContext)

  useEffect(() => {
    
  getPlaceById(id)
  .then(res => {
    setPlaceDetails(res)
  })
.catch(err => console.error(err));

  },[])

  
    return (
      <>
      <Layout>
        { placeDetails <= 0 
          ? <p> Loading....</p>
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
                <p className={styles.location}>{placeDetails.location.formatted_address}</p>
                <p className={styles.description}>{placeDetails.description}</p>
                <ul>
                  <li className={styles.information} > <strong>Schedule: </strong><span className= {`${placeDetails.hours.open_now ? styles.isOpen : styles.isClose}`} > {placeDetails.hours.open_now ? "Open Now" : "Closed Now"} </span> </li>
                  <li className={styles.information} > <strong>Holiday: </strong> <span className= {`${placeDetails.hours.is_local_holiday ? styles.isOpen : styles.isClose}`} > {placeDetails.hours.is_local_holiday ? "Open on Holiday" : "No open on Holiday"} </span> </li>
                  <li className={styles.information} > <strong>Tel: </strong> {placeDetails.tel} </li>
                  <li className={styles.information} > <a target="_blank" href={placeDetails.website} >{placeDetails.website}</a>  </li>
                </ul>
                <br />           
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