import React, { Component } from 'react';
import {css} from 'emotion';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';

class App extends Component {
  render() {
    return (
      <div className={styleApp}>
          <div className={stylePageContainer}>
              <div className={styleHeaderContainer}>
                <a className={styleLogo} href="/">FairyFish Fabrics</a>
                <ul className={styleMainMenu}>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Shop</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
              <div className="promotionContainer">promotion</div>
              <div className="galleryContainer">gallery</div>
              <div className="socialContainer">social</div>
              <div className="footerContainer">footer</div>
          </div>
      </div>
    );
  }
}

const styleApp = css`
  flex: 1;
  background: ${colours.c1};
  font-family: ${fonts.f3};
  font-size: 14px;
  color: ${colours.c2};
  
  a {
    text-decoration: none;
  }
`;
const stylePageContainer = css`
  height: 100%;
  max-width: 80%;
  margin: auto;
`;
const styleHeaderContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const styleLogo = css`
  font-family: ${fonts.f2};
  font-size: 38px;
  color: ${colours.c7};
`;
const styleMainMenu = css`
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
    font-size: 28px;
    color: ${colours.c2};
    
    :hover {
      color: ${colours.c7};
    }
  }
`;

export default App;
