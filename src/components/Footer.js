import React from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import {facebook, instagram, pinterest} from "../resources/img/icons";

const Footer = (props) => {
  const style = {
    footerContainer: css`
      width: 100%;
      background: ${colours.c1};
      z-index: 99;
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.2s ease;
      border-top: 1px dashed ${colours.c8};
      height: ${props.displayFooter};
    `,
    footerContainer__inner: css`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      
      margin: 0 20px;
      padding: 20px 0;
    `,
    socialLinks: css`
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      
      li {
        margin: 0 10px;
      }
      
      svg {
        width: 30px;
        height: 30px;
        fill: ${colours.c2};
        transition: all 0.2s ease;
      }
      
      a:hover {
        svg {
          fill: ${colours.c3};
        }
      }
    `,
    contact: css`
      display: ${props.isBottomReached ? 'block' : 'none'};
      margin-bottom: 20px;
      
      span {
        display: block;
       }
    `,
    credentials: css`
      color: ${colours.c8};
      display: ${props.isBottomReached ? 'block' : 'none'};
      
      a {
        color: ${colours.c8};
      }
      
      a:hover {
        color: ${colours.c4};
      }
    `,
  };


  return (
      <div className={style.footerContainer}>
        <div className={style.footerContainer__inner}>
          <ul className={style.socialLinks}>
            <li><a href="/">{facebook()}</a></li>
            <li><a href="/">{instagram()}</a></li>
            <li><a href="/">{pinterest()}</a></li>
          </ul>
          <div className={style.contact}>
            <span>email@email.com</span>
            <span>+36 12 1234 123</span>
          </div>
          <div className={style.credentials}>Icons made by <a href="https://www.flaticon.com/authors/graphicsbay" title="GraphicsBay" target="_blank" rel="noopener noreferrer">GraphicsBay</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
          <div className={style.credentials}>Design & Development by <a href="http://pannadraws.com" title="PannaDraws" target="_blank" rel="noopener noreferrer">PannaDraws</a></div>
        </div>
      </div>
  );
};
export default Footer;
