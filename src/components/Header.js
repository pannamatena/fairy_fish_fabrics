import React from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import {fonts} from "../resources/fonts";

const Header = (props) => {
  const style = {
    headerContainer: css`
      background: ${colours.c1};
      border-bottom: ${props.isScrolled ? `1px dashed ${colours.c8}` : 'none'};
      z-index: 99;
      position: fixed;
      top: 0;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      transition: all 0.2s ease;
      
      padding-top: ${props.isScrolled ? '10px' : '20px'};
      padding-bottom: ${props.isScrolled ? '10px' : '20px'};
    `,
    headerContainer__inner: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      
      margin: 0 20px;
    `,
    logo: css`
      transition: all 0.2s ease;
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
        transition: all 0.2s ease;
        font-family: ${fonts.f1};
        color: ${colours.c2};
        
        font-size: 28px;
        
        :hover {
          color: ${colours.c3};
        }
      }
    `,
  };


  return (
      <div className={style.headerContainer}>
        <div className={style.headerContainer__inner}>
          <a className={style.logo} href="/">FairyFish Fabrics</a>
          <ul className={style.mainMenu}>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
  );
};
export default Header;
