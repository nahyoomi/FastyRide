import React, {useState, useContext} from 'react'
import { AuthContext } from '../../Contexts/DataContext'
import Select from 'react-select'
import styles from './Filter.module.scss'
import { getPlaceBestRate, getPlaceOpen,getPlaceOpenFilter, getPlaceBestRateFilter } from '../../Utils/Service'

interface Props{
  lat: string
  lng: string
}

function Filter( {lat, lng}: Props) {
const  {dataUser, setPlaces}:any = useContext (AuthContext)

const BestRate =()=>{
  const { city, word } = dataUser
  if(city==="" && word ===word){
    getPlaceBestRateFilter(lat, lng)
    .then((res) => {
      setPlaces(res.results)
  })
  }else{
    getPlaceBestRate(city,word)
    .then((res) => {
      setPlaces(res.results)
  })
  }

}

const OpenNow =()=>{
  const { city, word } = dataUser
  if(city==="" && word ===word){
    getPlaceOpenFilter(lat, lng)
    .then((res) => {
      setPlaces(res.results)
  })
  }else{
    getPlaceOpen(city,word)
      .then((res) => {
        setPlaces(res.results)
    })
  }

}



  return (
    <div className={styles.container}>
        <div className={styles.containerDesktop}>
            <p>Filter by: </p>
            <div className={styles.containerButton} >
              <button type='button' onClick={BestRate}>Best Rate</button>  
              <button type='button' onClick={OpenNow}>Open now</button>
            </div>
                
        </div>
    </div>
  )
}

export default Filter