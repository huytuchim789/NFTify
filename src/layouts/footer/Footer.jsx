import React from 'react'
// import PropTypes from 'prop-types'
import { MailOutlined } from '@ant-design/icons'
import styles from './Footer.module.scss'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={`${styles.Footer}`}>
      <div className={`${styles.Footer__logo} ${styles['column-center']}`}>
        <div className={`flex items-center`} style={{ marginBottom: '12px' }}>
          <img src="./img/Frame.svg" className="block mr-2"></img>
          <img src="./img/Group.svg" className="block"></img>
        </div>
        <p style={{ lineHeight: '26px', width: '172px', marginBottom: '19px' }}>
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
      <div className={styles['column-center']}>
        <p className={`${styles.Footer__header}`}>About</p>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>About Us</span>
        </Link>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>Terms of Service</span>
        </Link>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>Privacy Policy</span>
        </Link>
      </div>
      <div className={styles['column-center']}>
        <p className={`${styles.Footer__header}`}>SUPPORT</p>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>Create Store</span>
        </Link>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>Customize Store</span>
        </Link>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>Sell NFT</span>
        </Link>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>Help Center</span>
        </Link>
      </div>
      <div className={styles['column-center']}>
        <p className={`${styles.Footer__header}`}>NFTIFY NETWORK</p>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>NFTify Project</span>
        </Link>
        <Link href="/">
          <span className={`${styles.Footer__content}`}>
            NFTify AI Services
          </span>
        </Link>
      </div>
      <div className={styles['column-center']}>
        <p className={`${styles.Footer__header}`}>CONTACT US</p>
        <div className={styles.Footer__content__contact}>
          <MailOutlined
            style={{
              marginRight: '8.5px',
              color: '#4F5566',
              marginBottom: '16px',
            }}
          />
          <Link href="/">
            <span className={`${styles.Footer__content}`}>
              support@nftify.network
            </span>
          </Link>
        </div>
      </div>
      <span
        className={styles.copyright}
        style={{
         
        }}
      >
        © Copyright NFTify Network. All Rights Reserved.
      </span>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
