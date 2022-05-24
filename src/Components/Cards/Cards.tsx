import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Contexts/DataContext";
import { NavLink,useNavigate  } from "react-router-dom";
import styles from "./Cards.module.scss";
import { PlaceInterface, PropsCard } from "../../Interfaces/Place";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faV } from '@fortawesome/free-solid-svg-icons'; 
import {compareWish, filtered} from "../../Services/Placeservices"
import Popup from 'reactjs-popup';
import swal from 'sweetalert'

function Cards({ places }: PropsCard) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<any>( []);
  const [ cards, SetCards ] = useState<Array<any>>([])
    const  {locasStores, setLocasStores}:any = useContext(AuthContext)
    const [active, setActive] = useState(false)

//modal
const closeModal = () => setOpen(false);

const handleWishlist =(item:PlaceInterface)=>{


  const fil = filtered(locasStores, item.fsq_id) 
  console.log( "filtrado: ", fil)
  if(fil === undefined){
    setLocasStores([
      ...locasStores,
      item
    ])
    setActive(true)
    swal("add a tu lista deseos")
    localStorage.setItem('wishList',JSON.stringify(locasStores))
    console.log("localstores de cards",locasStores)
  }else{
    swal("elento ya se encuentra en tu lista deseos")
  }
  
}

const handleImag = (item:any) => {
  setOpen(o => !o)
  setPhotos(item.photos)
  console.log(photos)
} 

const handleCard = (item:PlaceInterface) => {

  navigate(`/details/${item.fsq_id}`);
}

useEffect(()=>{
  console.log("array encontrado", locasStores)
},[locasStores, photos])

  return (
    <>
      <ul className={styles.allCards}>
        {places.map((item) => (
         /*  <NavLink 
          className={styles.linkDetails}
          to ='/details'> */
            <li key={item.fsq_id} className={`${styles.cards} ${active ? "active": "desactive"}`} >
            <div className={`${styles.imgCard}`}>
                <div className={styles.cardImage}  /* onClick={handleModalOpen} */>
                
                  <span className={styles.cardCaption}>
                    {item.location.locality}
                  </span>
                  {
                    item.photos.length <= 0
                    ?<img onClick={ () => handleImag(item)} className={styles.cardImg} src="https://fastly.4sqi.net/img/general/900x900/12608428_lld8NazpGvdRNnLmivG87GiaPxSu5rowjcp9a2UdqBY.jpg" />
                    : <img onClick={ () => handleImag(item)} className={styles.cardImg} src={`${item.photos[0].prefix}900x900${item.photos[0].suffix}`} />

                  }
                  <p className={styles.cardIcon}  >
                    <img src={`${item.categories[0].icon.prefix}30${item.categories[0].icon.suffix}`} /* alt={item.name} *//> 
                  </p>
                 <span className={styles.cardRate}> {item.rating} </span>  
                </div>
                
                <div className={styles.cardInfo}>
                  <p className={styles.cardTittle}>
                    {item.name}
                    <span className={styles.cardIWish} onClick={()=>{handleWishlist(item)}}>
                      <FontAwesomeIcon icon={faHeart} />  
                      <span className={styles.cardIWishText}>Add to favorites</span>
                    </span>
                  </p>
                  <p> {item.categories[0].name} </p>
                  <p className={styles.address}>{item.location.formatted_address}</p>
                  <p onClick= {()=>{handleCard(item)}}> more detailed information ...</p>

                </div>
                
            </div>
          </li>
        /*   </NavLink> */
        ))}
      </ul>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div  className={styles.cardImgModal} >
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div  className={styles.cardImgModalGallery}>
            {
                photos.map((element:any) => (
                              <img key={element.id} width={150} className={styles.cardGallery}  src={`${element.prefix}500x500${element.suffix}`} />

                ))
            }
          </div>
         
        </div>
      </Popup>
    </>
  );
}

export default Cards;
