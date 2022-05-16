import React, {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput, Props } from '../../Interfaces/Place';
import { getPlace,getWordPlace } from '../../Utils/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import styles from './SearchBar.module.scss'
import Weather from '../Weather/Weather';
import Filter from '../Filter/Filter';


export default function SearchBar({setPlace}: Props) {
  const {register,formState: {errors}, handleSubmit} = useForm<IFormInput>();
  const [city, setCity] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setCity(data.location)
    if (data.word.length>0){
      getWordPlace(data.location, data.word)
      .then(res => {
        console.log(res.results)
        setPlace(res.results)
      })
    .catch(err => console.error(err));
    }else {
      getPlace(data.location)
      .then(res => {
        console.log(data.location)
        setPlace(res.results)
      })
    .catch(err => console.error(err));
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={styles.searchBox}>
      <input {...register(("location"),{required:true, maxLength:50, minLength:3})}
        className={styles.searchInput}
        type='text'
        placeholder='lugares ej cali ?'/>
        <input {...register(("word"))}
        className={styles.searchInput}
        type='text'
        placeholder='categoria, palabra clave?'/>
      <button className={styles.searchBtn}>  
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {errors.location?.type === 'required' && <p className={styles.errorMsg}>Location is required</p>}
      {errors.location?.type === 'minLength' && <p className={styles.errorMsg}>Location must have more than three characters</p>}
      <Filter />
    </form>  
  )
}
