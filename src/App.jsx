import React, { Component } from 'react'

import styles from './app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.header}>
          <div className={styles.navbar}></div>
          <div className={styles.masthead}></div>
        </div>
        <div className={styles.steps}></div>
        <div className={styles.services}></div>
        <div className={styles.who}></div>
        <div className={styles.win}></div>
        <div className={styles.about}></div>
        <div className={styles.socials}></div>
        <div className={styles.vehicle}></div>
        <div className={styles.contact}></div>
        <div className={styles.footer}></div>
      </div>
    )
  }
}

export default App