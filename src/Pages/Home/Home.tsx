import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from "../../Contexts/DataContext";
import Cards from '../../Components/Cards/Cards'
import Layout from '../../Components/Layout/Layout'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Filter from '../../Components/Filter/Filter';
import { getPlaceGeoLocalization } from "../../Utils/Service"
import styles from './Home.module.scss'



function Home() {
  const [lat, setLat] = useState <any>(null);
  const [lng, setLng] = useState <any>(null);
  const [status, setStatus] = useState <any>(null);
  const  {places, setPlaces}:any = useContext (AuthContext)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  useEffect(() => {
    getLocation()
    getPlaceGeoLocalization(lat,lng)
      .then((res) => {
        setPlaces(res.results)
      })
  },[lat])

  return (
    <Layout>
    <section>
      <SearchBar setPlace={setPlaces} />
      {
        places.length > 0 
        ? 
        <>
          <Filter lat= {lat} lng={lng}  />
          <Cards places={places} /> 
        </>  
        : <div className={styles.message}>
          <h3> If you allow your location we´ll look the best places for you</h3>
          <div className={styles.image}>
            <img alt='principal image'src= 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
          </div>
        </div>
      }
      
    </section> 
  </Layout>
)
}

export default Home