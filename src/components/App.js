import React, { Component } from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
          <div className={style.pageContainer}>
              <div className={`${style.headerContainer} ${outerContainer}`}>
                <div className={`${style.headerContainer__inner} ${innerContainer}`}>
                  <a className={style.logo} href="/">FairyFish Fabrics</a>
                  <ul className={style.mainMenu}>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className={style.promotionContainer}>
                <div className={style.promotionContainer__inner}>
                  <a href="/">[logo img]</a>
                  <h2>Handwoven shawls and scarves</h2>
                </div>
                {/*<div className={style.promotionContainer__text}>
                  <p>Silk, merino and alpaca wool fashion accessories made by hand. Each piece is unique, handwoven in Budapest.</p>
                  <a href="/">See Collection</a>
                </div>*/}
              </div>
              <div className="galleryContainer">
                <div className={innerContainer}>
                  <Gallery />
                </div>
              </div>
              <div className="socialContainer">social</div>
              <div className="footerContainer">footer</div>
          </div>
      </div>
    );
  }
}

const outerContainer = css`
  width: 100%;
`;
const innerContainer = css`
    width: 85%;
    margin: auto;
    
    max-width: 1400px;
  `;
const styleButton = {
  primary: css`
    color: ${colours.c3};
    border: 1px solid ${colours.c3};
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 3px;
    
    :hover {
      color: ${colours.c1};
      background: ${colours.c3};
    }
  `
};
const style = {
  app: css`
    flex: 1;
    background: ${colours.c1};
    font-family: ${fonts.f3};
    color: ${colours.c2};
    
    font-size: 14px;
    
    a {
      text-decoration: none;
    }
  `,
  pageContainer: css`
    height: 100%;
    padding-top: 80px;
  `,
  headerContainer: css`
    background: ${colours.c1};
    z-index: 99;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    
    height: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
  `,
  headerContainer__inner: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `,
  logo: css`
    font-family: ${fonts.f2};
    color: ${colours.c2};
    
    font-size: 28px;
  `,
  mainMenu: css`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
    li {
      margin-left: 3%;
    }
    
    a {
      font-family: ${fonts.f1};
      color: ${colours.c2};
      
      font-size: 28px;
      
      :hover {
        color: ${colours.c3};
      }
    }
  `,
  promotionContainer: css`
  `,
  promotionContainer__inner: css`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-image: url(/imgs/7.jpg);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    height: 650px;
    background-size: 100%;
    
    a {
      color: ${colours.c3};
      border: 2px solid ${colours.c3};
      display: block;
      width: 100px;
      height: 100px;
    }
    
    h2 {
      font-size: 40px;
      color: ${colours.c1};
    }
  `,
  /*promotionContainer__title: css`
    margin-right: 50px;

    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
  `,
  promotionContainer__text: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    max-width: 40%;

    a {
      ${styleButton.primary}
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
    }
  `,*/
};

export default App;
