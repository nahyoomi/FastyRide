import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataContextProvider } from './Contexts/DataContext'
import './index.css'
import RoutesMain from './Routes/RoutesMain'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataContextProvider>
     <RoutesMain />
    </DataContextProvider>
  </React.StrictMode>
)