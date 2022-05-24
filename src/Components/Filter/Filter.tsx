import React, {useState, useContext} from 'react'
import { AuthContext } from '../../Contexts/DataContext'
import Select from 'react-select'
import styles from './Filter.module.scss'
import { getPlaceBestRate } from '../../Utils/Service'


function Filter() {
const  {dataUser, setPlaces}:any = useContext (AuthContext)

const BestRate =()=>{
  const { city, word } = dataUser
  console.log(city,word)
  getPlaceBestRate(city,word)
    .then((res) => {
      console.log("filter",res.results)
      setPlaces(res.results)
  })
}

  return (
    <div className={styles.container}>
        <div className={styles.containerDesktop}>
            <p>Filter by: </p>
            <div className={styles.containerButton} >
              <button type='button' onClick={BestRate}>Best Rate</button>  
              <button type='button'>Best Price</button>
            </div>
                
        </div>
    </div>
  )
}

export default Filter