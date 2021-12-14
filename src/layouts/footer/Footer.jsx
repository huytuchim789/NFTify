import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={`${styles.Footer}`}>
      <div>
        <div className="logo flex items-center	">
          <img src="./img/Frame.svg" className="block mr-2"></img>
          <img src="./img/Group.svg" className="block"></img>
        </div>
        <p style={{ lineHeight: '26px' }}>
          Fuel the rise of the Digital Content World
        </p>
        <div className="flex justify-between" style={{ width: '200px' }}>
          <img src="/img/icons/1.svg" />
          <img src="/img/icons/2.svg" />
          <img src="/img/icons/3.svg" />
          <img src="/img/icons/4.svg" />
          <img src="/img/icons/5.svg" />
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
