import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Cards.module.scss";
import { PropsCard } from "../../Interfaces/Place";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 

function Cards({ places }: PropsCard) {
  useEffect(() => {}, [places]);
  return (
    <>
      <ul className={styles.allCards}>
        {places.map((item) => (
            <NavLink 
            className={styles.linkDetails}
            to ='/details'>
            <li key={item.fsq_id} className={styles.cards}>
            <div className={`${styles.imgCard}`}>
                <div className={styles.cardImage}>
                  <span className={styles.cardCaption}>
                    {item.location.locality}
                  </span>
                  <img src="https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <p className={styles.cardWish}>
                    <FontAwesomeIcon icon={faHeart} />
                  </p>  
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardTittle}>
                    <span className={styles.cardIcon}>
                      <img src={`${item.categories[0].icon.prefix}`} /* alt={item.name} *//>  
                    </span>
                    {item.name}
                  </p>
                  <p> {item.categories[0].name} </p>
                  <p className={styles.address}>{item.location.formatted_address}</p>
                  

                </div>
                
            </div>
          </li>
          </NavLink>
        ))}
      </ul>
    </>
  );
}

export default Cards;
