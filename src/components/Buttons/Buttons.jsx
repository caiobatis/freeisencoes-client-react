import React from 'react'
import classNames from 'classnames'
import styles from './Buttons.scss'

const Link = props => {
  return props.children
}

const Buttons = props => {
  
  const buttonClass = classNames({
    [styles.full]: props.full,
    [styles[props.type]]: props.type,
    [styles.border]: props.border,
    [styles[props.size]]: props.size,
    [styles.uppercase]: props.uppercase,
  })

  const content = <button className={buttonClass} type="submit">{props.label}</button>
  return props.link ? <Link> {content} </Link> : content
}

export default Buttons 