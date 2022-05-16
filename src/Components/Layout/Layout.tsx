import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

interface Props{
  children : JSX.Element
}
 
function Layout({children}: Props) {
  return (
    <>
    <Header/>
    <main className={styles.mainContainer}>{children}</main>
    <Footer />
    </>
  )
}

export default Layout