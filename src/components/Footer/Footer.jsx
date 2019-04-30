import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo/Logo'
import styles from './Footer.scss'

const Footer = props => {
  
  const card = classNames(styles.card, {
    [styles.shadow]: props.shadow,
    [styles[props.padding]]: props.padding,
  })


  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles.logoCenter}>
              <Logo
                type='secundary'
              />
            </div>
          </div>
          <div className="col-md-3">
            <ul className={styles.list}>
              <li><p className={styles.p}>COMPRE POR E-MAIL</p></li>
              <li><a href="">atendimento@freeisencoes.com.br</a></li>
              <li><p className={styles.p}>COMPRE POR TELEFONE</p></li>
              <li><a href="">(13) 3222-3722</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className={styles.list}>
              <li><p className={styles.p}>Compre por Whatsapp</p></li>
              <li><a href="">(13) 95538.0601</a></li>
              <li><a href="">(13) 98852.5405</a></li>
              <li><a href="">(13) 99654.5993</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className={styles.list}>
              <li><p className={styles.p}>Compre por Whatsapp</p></li>
              <li>Av. Senador Feijó, 686 - cj. 615</li>
              <li>The Blue Office Mall Santos,</li>
              <li>São Paulo - CEP: 11015-504</li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="text-right">
              <ul className={styles.socials}>
                <li>
                  <a href="https://www.facebook.com/freeisencoessantos/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/freeisencoes/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li><i className="fab fa-whatsapp"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer