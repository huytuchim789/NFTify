import React from 'react'
import { Divider, Button } from 'antd'
import Link from 'next/link'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={`${styles.header} header flex px-40 py-7 justify-between`}>
      <div className="logo flex justify-center items-center	">
        <img src="./img/Frame.svg" className="block mr-2"></img>
        <img src="./img/Group.svg" className="block"></img>
      </div>
      <div
        className="btn-group flex justify-between items-center"
        style={{ width: '40%' }}
      >
        <Link href="/">Features</Link>
        <Link href="/">How it works</Link>
        <Link href="/">Help Center</Link>
        <Divider type="vertical" style={{ height: '30px' }} />
        <Link href="/">Login</Link>
        <Button
          style={{
            background:
              ' linear-gradient(135deg, #FF0A6C -16.8%, #2D27FF 138.64%)',
            borderRadius: '30px',
            color: 'white',
            width: '102px',
            height: '40px',
            fontWeight: '600',
          }}
        >
          Register
        </Button>
      </div>
    </div>
  )
}

export default Header
