import React from 'react'
import Layout from '../../Components/Layout/Layout'
import styles from './About.module.scss'
function About() {
  return (
    
    <Layout>
      <div className={styles.container}>
        <h3>What is FastyRide?</h3>
        <p>It is a free application that allows users to search locations with update information from different national and international 
        locations, incorporating a clear and easier navigation</p>
        <br/>
        <ul>
          <li>How?</li>
          <p> Add your place of preference through the search bar, you can use <strong>city name</strong> or <strong> name of the place</strong></p>
          <li>When?</li>
          <p> You can use it whenever you want, make sure you have internet connection.</p>
          <li>Why?</li>
          <p> you will be able to see main details about your place of preference</p>
        </ul>
        <h6> We keep improving, let us know how we can make your daily life easier!</h6>
      </div>
    </Layout>
  )
}

export default About