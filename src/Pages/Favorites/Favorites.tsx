import React, {useEffect,useContext } from "react";
import { AuthContext } from "../../Contexts/DataContext";
import Cards from "../../Components/Cards/Cards";
import Layout from '../../Components/Layout/Layout'

function Favorites() {
  const  {locasStores, setLocasStores}:any = useContext(AuthContext)


  const getDataLocal = () => {
    let datalocal = JSON.parse(localStorage.getItem("wishList") || '{}');
    console.log('locasstores sacado',datalocal)
    setLocasStores(datalocal)
    return datalocal
  }; 

  useEffect(() => {
    if(locasStores.length<=0){
      getDataLocal()
    }
    console.log("favoritos",locasStores)
  }, []);

  return (
    <>
    <Layout>
      <>
      <p>Favoritos</p>
      {
          locasStores.length > 0 
          ?   <Cards places={ locasStores }/> 
          : <h3> No hay favoritos</h3>
        }

      </>
    </Layout>
    </>
  )
}

export default Favorites