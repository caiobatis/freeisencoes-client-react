import React from 'react'
import Link from '../Link/Link'
import styles from './Logo.scss'

const Logo = props => {
  return (
    <Link
      to={'/'}
      className={styles.logoLink}
    >
      <div className={styles.logo}>
        Free Isenções
      </div>
    </Link>
  )
}

export default Logo 