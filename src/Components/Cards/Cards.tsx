import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Contexts/DataContext";
import { NavLink,useNavigate  } from "react-router-dom";
import styles from "./Cards.module.scss";
import { PlaceInterface, PropsCard } from "../../Interfaces/Place";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faV } from '@fortawesome/free-solid-svg-icons'; 

function Cards({ places }: PropsCard) {
  let navigate = useNavigate();
  const [ cards, SetCards ] = useState<Array<any>>([])
    const  {locasStores, setLocasStores}:any = useContext(AuthContext)

const handleWishlist =(item:PlaceInterface)=>{
  console.log(item) 
  setLocasStores([
    ...locasStores,
    item
  ])
  localStorage.setItem('wishList',JSON.stringify(locasStores))
  console.log("localstores de cards",locasStores)
  
}

const handleCard = (item:PlaceInterface) => {

  navigate(`/details/${item.fsq_id}`);
}

useEffect(()=>{
  console.log("1",locasStores)
},[locasStores])

  return (
    <>
      <ul className={styles.allCards}>
        {places.map((item) => (
         /*  <NavLink 
          className={styles.linkDetails}
          to ='/details'> */
            <li key={item.fsq_id} className={styles.cards} onClick= {()=>{handleCard(item)}}>
            <div className={`${styles.imgCard}`}>
                <div className={styles.cardImage}>
                  <span className={styles.cardCaption}>
                    {item.location.locality}
                  </span>
                  <img src="https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <p className={styles.cardWish} onClick={()=>{handleWishlist(item)}} >
                    <FontAwesomeIcon icon={faHeart} />
                  </p>  
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardTittle}>
                    <span className={styles.cardIcon}>
                      <img src="#" /* alt={item.name} *//>  
                    </span>
                    {item.name}
                  </p>
                  <p> {item.categories[0].name} </p>
                  <p className={styles.address}>{item.location.formatted_address}</p>
                  

                </div>
                
            </div>
          </li>
        /*   </NavLink> */
        ))}
      </ul>
    </>
  );
}

export default Cards;
