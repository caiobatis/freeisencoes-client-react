import React from 'react'
import styles from './Header.scss'

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="brand">
                <img src='http://www.freeisencoes.com.br/images/logo-free-isencoes.png' alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <nav className={styles.menu}>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Sobre</a></li>
                  <li><a href="">Serviços</a></li>
                  <li><a href="">Dúvidas</a></li>
                  <li><a href="">Contato</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.helpnav}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h2">Veículo <b>0Km</b> com até <b>30%</b> de desconto</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header