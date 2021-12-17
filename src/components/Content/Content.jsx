import React, { useState } from 'react';
import styles from './Content.module.scss';
import { Button, Tabs, Select } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;
const Content = () => {
  const [option, setOption] = useState('1');
  const handleChange = (value) => {
    setOption(value);
  };
  const solutions = [
    {
      img: '/img/solutions/Vector1.svg',
      header: 'Zero Coding',
      content: `Create an NFT store without coding and with zero cost upfront.\n\nJust register store account on NFTify, you can have your own market without spending a coin for development cost.`,
    },
    {
      img: '/img/solutions/Vector2.svg',
      header: 'Copyright Protection',
      content:
        ' Create NFT which is integrated with AI service to identify the content similarity.\n\nNFTify provides built-in AI services to help detect fake,duplicates or similar tokens for enhancing copyright protection.',
    },
    {
      img: '/img/solutions/Vector3.svg',
      header: 'Zero Coding',
      content:
        'NFTify supports multi-chain to create your own store on multiple network such as Ethereum, Binance Smart Chain, etc.\n\nYour NFT will have a larger ecosystem to interchange and trade.',
    },
    {
      img: '/img/solutions/Vector4.svg',
      header: 'Customizable Branding',
      content:
        "Organize the layout of your NFT store's appearance align with your own branding.\n\nThrough theme customize function, you're free to modify or change any way you want such as logo, layout, color and more.",
    },
    {
      img: '/img/solutions/Vector5.svg',
      header: 'Low Cost',
      content:
        " Don't need to spend a coin for development but still can enjoy thefull service of an NFT platform with your own branding in a much lowercost.\n\nChoose model which adapt your business need with flexible pricing plan",
    },
    {
      img: '/img/solutions/Vector6.svg',
      header: 'Extensible',
      content:
        "Customize and unlimitedly extend functions via Community's plugins.\n\nThousand plugins available to customize the flow for business need adaption.",
    },
  ];
  const instructions = [
    {
      content: 'Step 1: Click Register to create your FREE account',
    },
    {
      content: 'Step 2: Enter your email and password',
    },
    {
      content:
        'Step 3: Provide the verification code that was sent to your email',
    },
    {
      content: 'Step 4: Create your Store and connect wallet to your Store',
    },
  ];
  return (
    <div className={`${styles.content}`}>
      {/**Intro */}
      <div className={`${styles.intro} mb-28`}>
        <div className={`${styles.intro__text}`}>
          <h3 className={styles.intro__header}>
            Anyone can start NFT business with NFTify
          </h3>
          <span
            className={styles.intro__content}
            style={{ color: '#4F5566', marginBottom: '40px' }}
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
              fontWeight: '600',
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
          <img src="./img/intro/intro1.png" className={styles.img__1} />
          <img src="./img/intro/intro2.png" className={styles.img__2} />
          <img
            src="./img/intro/intro3.png"
            className={styles.img__3}
            style={{}}
          />
        </div>
      </div>
      {/**Logo*/}
      <div className={`${styles.logo}`} style={{}}>
        <span className={styles.power} style={{}}>
          Powered By
        </span>
        <img className={styles.item} src="./img/cooporations/co2.svg" />
        <div className={styles.item} style={{ display: 'flex' }}>
          <img
            src="./img/cooporations/co3-1.svg"
            className="inline-block mr-2"
          ></img>
          <img src="./img/cooporations/co3-2.svg"></img>
        </div>
        <img className={styles.item} src="./img/cooporations/co4.svg" />
        <img className={styles.item} src="./img/cooporations/co5.svg" />
      </div>
      {/**Solution*/}
      <div className={`${styles.solutions}`}>
        <h6 className={`${styles.solutions__header}`}>
          A solution that adapts to your business
        </h6>
        <div className={`${styles.solutions__content}`}>
          {solutions.map((solution) => {
            return (
              <div
                style={{
                  wordWrap: 'break-word',
                  whiteSpace: 'normal',
                }}
              >
                <img
                  className="m-auto"
                  style={{ width: '52px', height: '51px' }}
                  src={solution.img}
                />
                <p
                  className="text-center"
                  style={{
                    fontSize: '0.57em',
                    lineHeight: '26px',
                    fontWeight: '600',
                    color: '#23262F',
                    marginTop: '17px',
                  }}
                >
                  {solution.header}
                </p>
                <span
                  style={{
                    fontSize: '0.5em',
                    whiteSpace: 'pre-line',
                    display: 'inline-block',
                  }}
                >
                  {solution.content}
                </span>
              </div>
            );
          })}
          <Button className={`${styles.solutions__btn}`} style={{}}>
            <span style={{ marginRight: '5px' }} className="text-xl">
              Create a FREE account
            </span>
          </Button>
        </div>
      </div>
      <div className={`${styles.instruction}`}>
        <h6 className={`${styles.instruction__header}`}>How it works?</h6>
        <Tabs
          defaultActiveKey="1"
          centered
          style={{ fontWeight: '600', color: '#23262F' }}
          className={styles.instruction__tab}
        >
          <TabPane
            tab="01 Create Store"
            key="1"
            className={`${styles.instruction__content}`}
          >
            <div>
              <div
                style={{
                  height: '335px',
                  width: '544px',
                  backgroundColor: '#EDF2FF',
                  position: 'relative',
                  borderRadius: '16px',
                  zoom: '140%',
                }}
              >
                {' '}
              </div>
              <img
                className={styles.img__big}
                src="./img/instructions/big.svg"
                // style={{}}
              />
              <img
                className={styles.img__small}
                src="./img/instructions/small.svg"
                // style={{}}
              />
            </div>
            <div style={{ marginLeft: '130px', marginTop: '140px' }}>
              <h6
                style={{
                  fontWeight: '600',
                  fontSize: '28px',
                  marginBottom: '25px',
                }}
              >
                Step 1: Create Store Account
              </h6>
              <ul style={{ maxWidth: '410px' }}>
                {instructions.map((instruction) => (
                  <li>
                    <img
                      src="./img/free.svg"
                      className="inline-block"
                      style={{
                        width: '16px',
                        backgroundColor: '#4F5566',
                        marginRight: '14px',
                      }}
                    ></img>
                    <span style={{ fontWeight: '400', lineHeight: '30px' }}>
                      {instruction.content}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                style={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  color: '#FF0A6C',
                }}
                href="#"
              >
                Learn more
              </a>
            </div>
          </TabPane>
          <TabPane tab="02 Customize Store" key="2"></TabPane>
          <TabPane tab="03 Create NFT" key="3"></TabPane>
          <TabPane tab="04 Sell NFT" key="4"></TabPane>
        </Tabs>
        <Select
          defaultValue="1"
          className={styles.instruction__select}
          onChange={handleChange}
        >
          <Option value="1">01 Create Store</Option>
          <Option value="2">02 Customize Store</Option>
          <Option value="3">03 Create NFT</Option>
          <Option value="4">04 Sell NFT</Option>
        </Select>
        {option === '1' ? (
          <div className={`${styles['instruction__content--mobile']}`}>
            <div
              style={{
                height: '230px',
                width: 'auto',
                backgroundColor: '#EDF2FF',
                position: 'relative',
                borderRadius: '16px',
                // zoom: '140%',
                margin: '44px 0 78px 0px',
                zIndex: '1',
              }}
            >
              <img
                className={styles.img__big}
                src="./img/instructions/big.svg"
                // style={{}}
              />
              <img
                className={styles.img__small}
                src="./img/instructions/small.svg"
                // style={{}}
              />
            </div>

            <div className={styles['instruction__step--mobile']}>
              <h6
                style={{
                  fontWeight: '600',
                  fontSize: '22px',
                  marginBottom: '25px',
                }}
              >
                Step 1: Create Store Account
              </h6>
              <ul style={{ maxWidth: '410px' }}>
                {instructions.map((instruction) => (
                  <li>
                    <img
                      src="./img/free.svg"
                      className="inline-block"
                      style={{
                        width: '16px',
                        backgroundColor: '#4F5566',
                        marginRight: '14px',
                      }}
                    ></img>
                    <span
                      style={{
                        fontWeight: '400',
                        lineHeight: '30px',
                        fontSize: '16px',
                      }}
                    >
                      {instruction.content}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                style={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  color: '#FF0A6C',
                  fontSize: '16px',
                }}
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
        ) : null}
      </div>
      <div className={`${styles.trial}`}>
        <h6 className={`${styles.trial__header}`}>
          Start your own NFT business now!
        </h6>
        <p className={`${styles.trial__subheader}`}>
          Let's create your own NFT landscape
        </p>
        <Button
          style={{
            background:
              ' linear-gradient(135deg, #FF0A6C -16.8%, #2D27FF 138.64%)',
            borderRadius: '30px',
            color: 'white',
            padding: '17px 25px',
            width: '282px',
            height: '60px',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className="text-xl">Start FREE Now!</span>
        </Button>
      </div>
      <div className={`${styles.mail}`}>
        <h6 className={`${styles.mail__header}`}>Join our weekly digest!</h6>
        <p className={`${styles.mail__subheader}`}>
          Be the first to know about our platform updates & exclusive
          promotions.
        </p>
        <div className={`${styles.mail__content}`}>
          <input
            className={`${styles.mail__input}`}
            type="text"
            placeholder="Enter your email"
            style={{}}
          ></input>
          <Button className={styles.mail__subcribe} style={{}}>
            <span>Subscribe</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
