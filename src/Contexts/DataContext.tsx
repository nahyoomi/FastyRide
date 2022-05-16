import { createContext, useState } from "react";

export const AuthContext = createContext({})

interface Props {
    children:any
}

export function DataContextProvider(props:Props){
    const [places, setPlaces ]= useState([]);
    const [locasStores, setLocasStores ]= useState([]);
    const valor = {places, setPlaces ,locasStores, setLocasStores};

    return (
        <AuthContext.Provider value={valor}>
            {props.children}
        </AuthContext.Provider> 
    )
}