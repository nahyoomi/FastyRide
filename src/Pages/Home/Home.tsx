import React, {useContext} from 'react';
import { AuthContext } from "../../Contexts/DataContext";
import Cards from '../../Components/Cards/Cards'
import Layout from '../../Components/Layout/Layout'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { PlaceInterface, Props} from '../../Interfaces/Place';


function Home() {
  /* const [places, setPlace] = useState <Array<PlaceInterface>>([]); */
  const  {places, setPlaces}:any = useContext (AuthContext)

 

  return (
    <Layout>
    <section>
      <SearchBar setPlace={setPlaces} />
      {
        places.length > 0 
        ? <Cards places={places} /> 
        : <h3> Buscar un lugar</h3>
      }
    </section> 
  </Layout>
)
}

export default Home