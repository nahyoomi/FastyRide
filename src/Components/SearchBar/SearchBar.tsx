import React, {useState, useContext} from 'react'
import { AuthContext } from '../../Contexts/DataContext';
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput, Props } from '../../Interfaces/Place';
import { getPlace,getWordPlace } from '../../Utils/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import styles from './SearchBar.module.scss'
import Weather from '../Weather/Weather';
import swal from 'sweetalert';


export default function SearchBar({setPlace}: Props) {
  const {register,formState: {errors}, handleSubmit} = useForm<IFormInput>();
  const  {dataUser, setDataUser}:any = useContext (AuthContext)

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setDataUser({city:data.location,word:data.word})
    if (data.word.length>0){
      getWordPlace(data.location, data.word)
      .then(res => {
        console.log(res.results)
        if(res.results.length<=0){
          swal("Check your search fields the searched places do not exist")
        }
       
        setPlace(res.results)
      })
    .catch(err => console.error(err));
    }else {
      getPlace(data.location)
      .then(res => {
        console.log(data.location)
        if(res.results <=0){
          swal("The place you are looking for is not in our list")
        }
        setPlace(res.results)
      })
    .catch(err => {
      console.error(err.response.data.message)
      swal(err.response.data.message)

    });
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={styles.searchBox}>
        <div className={styles.searchBars}>
          <input {...register(("location"),{required:true, maxLength:50, minLength:3})}
            className={styles.searchInput}
            type='text'
            placeholder='Search by City'/>
            <input {...register(("word"))}
            className={styles.searchInput}
            type='text'
            placeholder='Search by key words'/>
            <button className={styles.searchBtn}>  
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    
      {errors.location?.type === 'required' && <p className={styles.errorMsg}>Location is required</p>}
      {errors.location?.type === 'minLength' && <p className={styles.errorMsg}>Location must have more than three characters</p>}
      
    </form>  
  )
}
