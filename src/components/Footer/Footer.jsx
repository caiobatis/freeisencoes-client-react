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
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logoCenter">
              <Logo
                type='secundary'
              />
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer