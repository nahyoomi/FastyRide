import React, {useEffect,useContext } from "react";
import { AuthContext } from "../../Contexts/DataContext";
import Cards from "../../Components/Cards/Cards";
import Layout from '../../Components/Layout/Layout'

function Favorites() {
  const  {locasStores, setLocasStores}:any = useContext(AuthContext)


  const getDataLocal = () => {
    let datalocal = JSON.parse(localStorage.getItem("wishList") || '{}');
    setLocasStores(datalocal)
    return datalocal
  }; 

  useEffect(() => {
    if(locasStores.length<=0){
      getDataLocal()
    }
  }, []);

  return (
    <>
    <Layout>
      <>
      <p>Mi lista de favoritos</p>
      {
          locasStores.length > 0 
          ?   <Cards places={ locasStores }/> 
          : <h3>No se ha encontrado ninguna lista</h3>
        }

      </>
    </Layout>
    </>
  )
}

export default Favorites