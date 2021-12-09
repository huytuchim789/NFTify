import React from 'react'
import styles from './Content.module.scss'
import { Button } from 'antd'

const Content = () => {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.intro} px-40 mb-28`}>
        <div className="intro__text mt-40">
          <h3 className="font-semibold text-5xl">
            Anyone can start NFT business with NFTify
          </h3>
          <span
            className="inline-block "
            style={{ color: 'black', marginBottom: '40px' }}
          >
            Try NFTify FREE to build your own NFT store without coding and with
            zero cost upfront, create NFT in secure with copyright protection,
            customize store website align with your own branding at the low cost
            and more...
          </span>
          <Button
            style={{
              background:
                ' linear-gradient(135deg, #FF0A6C -16.8%, #2D27FF 138.64%)',
              borderRadius: '30px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '17px 25px',
              width: '200px',
              height: '60px',
            }}
          >
            <span style={{ marginRight: '5px' }} className="text-xl">
              Start free now
            </span>
            <img
              src="./img/free.svg"
              className="inline-block"
              style={{ width: '40px', marginTop: '4px' }}
            ></img>
          </Button>
        </div>
        <div className={`${styles.intro__img} relative`}>
          <img
            src="./img/intro/intro1.svg"
            style={{
              zoom: '160%',
              position: 'absolute',
              zIndex: '1',
              top: '10%',
              left: '40%',
            }}
          />
          <img
            src="./img/intro/intro2.svg"
            style={{ zoom: '140%', position: 'absolute', bottom: '0' }}
          />
          <img
            src="./img/intro/intro3.svg"
            style={{
              zoom: '150%',
              position: 'absolute',
              zIndex: '1',
              top: '20%',
              right: '75%',
            }}
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: ' #E9EEFC', height: '40px', display: 'flex' }}
      ></div>
    </div>
  )
}

export default Content
