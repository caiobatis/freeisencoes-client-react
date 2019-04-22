import React from 'react'
import styles from './Header.scss'
import Buttons from '../Buttons/Buttons';
import Logo from '../Logo/Logo';

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="brand">
                <Logo
                  type={'white'}
                />
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
            <div className="text-center">
              <h2 className="h2">Veículo <b>0KM</b> com até <b>30%</b> de desconto</h2>
              <Buttons
                type="secundary"
                border={true}
                label="solicite seu orçamento"
                uppercase={true}
                link={'/'}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header