import React, { useState, useEffect } from 'react';
import Content from './../../components/Content/Content';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import { Modal, Button } from 'antd';
import styles from './Homepage.module.scss';
export default function HomePage() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const appearModal = setTimeout(() => {
      setIsModalVisible(true);
    }, 5000);
    return () => {
      clearTimeout(appearModal);
    };
  }, []);
  return (
    <div className={styles.homepage}>
      <Header />
      <Content />
      <Footer />
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        bodyStyle={{ borderRadius: '20px' }}
      >
        {isSuccess ? (
          <div className="flex flex-col justify-center align items-center">
            <img src="./img/subcribe/funny.svg" />
            <h6
              className={`${styles.mail__header}`}
              style={{
                fontWeight: '600',
                fontSize: '28px',
                lineHeight: '42px',
                textAlign: 'center',
                color: '#23262f',
                marginBottom: '12px',
              }}
            >
              Thanks!!!
            </h6>
            <p
              className={`${styles.modal__subheader}`}
              style={{
                fontSize: '16px',
                lineHeight: '26px',
                width: '428px',
                textAlign: 'center',
                color: '#4f5566',
                marginBottom: '32px',
              }}
            >
              Please check your email inbox or spam folder. We’ve sent you a
              link to verify your email.
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center align items-center">
            <img src="./img/subcribe/bell.svg" />
            <h6
              className={`${styles.mail__header}`}
              style={{
                fontWeight: '600',
                fontSize: '28px',
                lineHeight: '42px',
                textAlign: 'center',
                color: '#23262f',
                marginBottom: '12px',
              }}
            >
              Join our weekly digest!
            </h6>
            <p
              className={`${styles.modal__subheader}`}
              style={{
                fontSize: '16px',
                lineHeight: '26px',
                width: '428px',
                textAlign: 'center',
                color: '#4f5566',
                marginBottom: '32px',
              }}
            >
              Be the first to know about our platform updates & exclusive
              promotions.
            </p>
            <div className={`${styles.modal__content} flex items-center`}>
              <input
                className="mail__input"
                type="text"
                placeholder="Enter your email"
                style={{
                  border: '2px solid #E6E8EC',
                  boxSizing: 'border-box',
                  borderRadius: '30px',
                  width: '319px',
                  padding: '13px 0 13px 16px',
                  height: '44px',
                  marginRight: '12px',
                }}
              ></input>
              <Button
                style={{
                  background:
                    ' linear-gradient(135deg, #FF0A6C -16.8%, #2D27FF 138.64%)',
                  borderRadius: '30px',
                  color: 'white',
                  padding: '12px 3px',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '117px',
                  height: '44px',
                }}
                onClick={() => {
                  setIsSuccess(true);
                }}
              >
                <span>Subscribe</span>
              </Button>
            </div>
          </div>
        )}
      </Modal>
      <style>
        {`.ant-modal-content {
            border-radius: 20px !important;
          }`}
      </style>
    </div>
  );
}
