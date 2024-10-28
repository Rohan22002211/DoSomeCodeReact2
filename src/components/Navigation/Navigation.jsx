import React from 'react'
// import "./Navigation.module.css"
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className='container'>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img src="../images/clipboard.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
