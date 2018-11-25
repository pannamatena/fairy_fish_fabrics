import React, { Component } from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
          <div className={style.pageContainer}>
              <div className={`${style.headerContainer} ${innerContainer}`}>
                <a className={style.logo} href="/">FairyFish Fabrics</a>
                <ul className={style.mainMenu}>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Shop</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
              <div className={`${style.promotionContainer} ${innerContainer}`}>
                <div className={style.promotionContainer__title}>
                  <h2>Handwoven shawls and scarves.</h2>
                  <p>Silk, merino and alpaca wool unique fashion accessories made by hand.</p>
                </div>
                <div className={style.promotionContainer__text}>
                  <a href="/">See Collection</a>
                </div>
              </div>
              <div className="galleryContainer">gallery</div>
              <div className="socialContainer">social</div>
              <div className="footerContainer">footer</div>
          </div>
      </div>
    );
  }
}

const innerContainer = css`
    width: 80%;
    margin: auto;
    
    max-width: 1200px;
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
  `,
  headerContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    margin-top: 20px;
    margin-bottom: 40px;
  `,
  logo: css`
    font-family: ${fonts.f2};
    color: ${colours.c7};
    
    font-size: 38px;
  `,
  mainMenu: css`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
    li {
      margin-left: 5%;
    }
    
    a {
      font-family: ${fonts.f1};
      color: ${colours.c2};
      
      font-size: 28px;
      
      :hover {
        color: ${colours.c7};
      }
    }
  `,
  promotionContainer: css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    margin-bottom: 40px;
  `,
  promotionContainer__title: css`
    flex: 1; 
    margin-right: 20px;
    
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 16px;
    }
  `,
  promotionContainer__text: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    a {
      ${styleButton.primary}
    }
  `,
};

export default App;
