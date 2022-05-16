import React from 'react'
import Select from 'react-select'
import styles from './Filter.module.scss'

const options = [
    { value: 'supermarket', label: 'Supermarket' },
    { value: 'restaurants', label: 'Restaurants' },
    { value: 'pharmacy', label: 'Pharmacy' },
    { value: 'hotels', label: 'Hotels' },

  ]

function Filter() {
  return (
    <div className={styles.container}>
        <div className={styles.containerDesktop}>
            <button type='button'>Supermarket</button>  
            <button type='button'>Restaurants</button>    
            <button type='button'>Pharmacy</button>  
            <button type='button'>Hotels</button>
        </div>
        <div className={styles.containerMobile}>
        <Select options={options} />
        </div>
          
    </div>
  )
}

export default Filter