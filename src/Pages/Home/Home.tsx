import React, {useState, useEffect} from 'react'
import Cards from '../../Components/Cards/Cards'
import Layout from '../../Components/Layout/Layout'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { PlaceInterface, Props} from '../../Interfaces/Place';


function Home() {
/*   const [city, setCity] = useState("cali2"); */
  const [places, setPlace] = useState <Array<PlaceInterface>>([]);

 

  return (
    <Layout>
      <section>
        <SearchBar /* city={city} setCity={setCity} */ setPlace={setPlace} />
        <Cards places={places}/>
      </section> 
    </Layout>
  )
}

export default Home