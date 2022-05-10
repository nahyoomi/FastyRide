import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import styles from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <div className={styles.searchBox}>
        <input className={styles.searchInput}
           type='text'
           placeholder='Search something...'/>
        <button className={styles.searchBtn}>  
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

    </div>
  )
}
