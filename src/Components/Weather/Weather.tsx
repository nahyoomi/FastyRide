import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Weather.module.scss'
import { faSun } from '@fortawesome/free-regular-svg-icons';
function Weather() {
  return (
    <div className={styles.weatherCard}>
      <h2>Name Place</h2>
      <div className={styles.conditions}>
        <h3>Conditions</h3>
        <h3>Wind + Precip</h3>
      </div>
      <div className={styles.climate}>
        <span><FontAwesomeIcon icon={faSun} /></span>
        <p>25º</p>
      </div>
    </div>
  )
}

export default Weather