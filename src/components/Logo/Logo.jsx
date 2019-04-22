import React from 'react'
import classNames from 'classnames'
import Link from '../Link/Link'
import styles from './Logo.scss'

const Logo = props => {
  return (
    <Link
      to={'/'}
    >
      <div className={styles.logo}>
        <></>
      </div>
    </Link>
  )
}

export default Logo 