import React ,{createContext,useState} from 'react'

import ProductsApi from './api/ProductsApi'


export const GlobaleState = createContext({})


export const DataProvider = ({children}) =>{

    const [token,setToken] = useState(false)


    const state = {
        
        token : [token,setToken],

        productsapi:ProductsApi()
    }


    return (

        <GlobaleState.Provider value={state}>
        
        {children}

        </GlobaleState.Provider>
    )

}