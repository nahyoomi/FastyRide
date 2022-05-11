import React, {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput, Props } from '../../Interfaces/Place';
import { getPlace } from '../../Utils/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import styles from './SearchBar.module.scss'


export default function SearchBar({/* city,setCity, */setPlace}: Props) {
  const {register,formState: {errors}, handleSubmit} = useForm<IFormInput>();
  const [city, setCity] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
    setCity(data.location)
    getPlace(data.location)
    .then(res => {
      console.log(res.results)
      setPlace(res.results)
    })
  .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={styles.searchBox}>
      <p className={styles.tittle}>Where would you like to go today?</p>
      <input {...register("location",{required:true, maxLength:50, minLength:3})}
        className={styles.searchInput}
        type='text'
        placeholder='Search something...'/>
       
      <button className={styles.searchBtn}>  
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {errors.location?.type === 'required' && <p className={styles.errorMsg}>Location is required</p>}
      {errors.location?.type === 'minLength' && <p className={styles.errorMsg}>Location must have more than three characters</p>}
    </form>  
  )
}
