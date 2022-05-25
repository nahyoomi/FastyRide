import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Contexts/DataContext";
import { useNavigate  } from "react-router-dom";
import styles from "./Cards.module.scss";
import { PlaceInterface, PropsCard } from "../../Interfaces/Place";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { filtered} from "../../Services/Placeservices"
import Popup from 'reactjs-popup';
import swal from 'sweetalert'

function Cards({ places }: PropsCard) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<any>( []);
  const [ cards, SetCards ] = useState<Array<any>>([])
    const  {locasStores, setLocasStores}:any = useContext(AuthContext)
    const [active, setActive] = useState(false)

const closeModal = () => setOpen(false);

const handleWishlist =(item:PlaceInterface)=>{


  const fil = filtered(locasStores, item.fsq_id) 
  if(fil === undefined){
    setLocasStores([
      ...locasStores,
      item
    ])
    setActive(true)
    swal("Add to favorites")
    localStorage.setItem('wishList',JSON.stringify(locasStores))
  }else{
    swal("Element is already on your list")
  }
  
}

const handleImag = (item:any) => {
  setOpen(o => !o)
  setPhotos(item.photos)
} 

const handleCard = (item:PlaceInterface) => {

  navigate(`/details/${item.fsq_id}`);
}

useEffect(()=>{
},[locasStores, photos])

  return (
    <>
      <ul className={styles.allCards}>
        {places.map((item) => (
            <li key={item.fsq_id} className={`${styles.cards} ${active ? "active": "desactive"}`} >
            <div className={`${styles.imgCard}`}>
                <div className={styles.cardImage} >
                
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
                  <p className={styles.moreDetails} onClick= {()=>{handleCard(item)}}> more detailed information</p>

                </div>
                
            </div>
          </li>

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
