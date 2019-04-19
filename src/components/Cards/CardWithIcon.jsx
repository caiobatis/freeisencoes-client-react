import React from 'react'
import classNames from 'classnames'
import styles from './Cards.scss'

const CardWithIcon = props => {
  
  const cardWithIcon = classNames(styles.cardWithIcon, {
    [styles.shadow]: props.shadow,
    [styles[props.padding]]: props.padding,
  })


  return (
    <div className={cardWithIcon}>
      { props.children }
    </div>
  )
}

export default CardWithIcon 