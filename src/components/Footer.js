import React from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import { breakPoints } from '../resources/breakPoints';
import {facebook, instagram } from "../resources/img/icons";

const Footer = (props) => {
  const footerHeight = () => {
    switch(props.displayFooter) {
      case 'SHOW':
        return 'footerContainer--show';
      case 'SHOW_BOTTOM':
        return 'footerContainer--showBottom';
      default:
        return 'footerContainer--hidden';
    }
  };

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
      border-top: 1px dashed ${colours.c9};
    `,
    'footerContainer--show': css`
      height: 55px;
      @media ${breakPoints.tabletPortrait} {
        height: 65px;
      }
      @media ${breakPoints.desktopSmall} {
        height: 70px;
      }
    `,
    'footerContainer--showBottom': css`
      height: 160px;
      @media ${breakPoints.desktopSmall} {
        height: 200px;
      }
    `,
    'footerContainer--hidden': css`
      height: 0;
    `,
    footerContainer__inner: css`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      
      margin: 0 10px;
      padding: 10px 0;
      @media ${breakPoints.tabletPortrait} {
        margin: 0 15px;
        padding: 15px 0;
      }
      @media ${breakPoints.desktopSmall} {
        margin: 0 20px;
        padding: 20px 0;
      }
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
      text-align: center;
      
      span {
        display: inline-block;
        margin: 0 10px;
        @media ${breakPoints.tabletPortrait} {
          margin: 0 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin: 0 20px;
        }
       }
    `,
    credentials: css`
      color: ${colours.c8};
      display: ${props.isBottomReached ? 'block' : 'none'};
      text-align: center;
      
      a {
        color: ${colours.c8};
      }
      
      a:hover {
        color: ${colours.c4};
      }
    `,
  };

  return (
      <div className={`${style.footerContainer} ${style[footerHeight()]}`}>
        <div className={style.footerContainer__inner}>
          <ul className={style.socialLinks}>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FairyFish-Fabrics-404783180264195/">{facebook()}</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fairyfishfabrics/">{instagram()}</a></li>
          </ul>
          <div className={style.contact}>
            <span><a href="mailto:email@email.com">email@email.com</a></span>|
            <span>+36 12 1234 123</span>
          </div>
          <div className={style.credentials}>Icons made by <a href="https://www.flaticon.com/authors/graphicsbay" title="GraphicsBay" target="_blank" rel="noopener noreferrer">GraphicsBay</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
          <div className={style.credentials}>Photos by Andi Kondas Photo - Portrait for You</div>
          <div className={style.credentials}>Design & Development by <a href="http://pannadraws.com" title="PannaDraws" target="_blank" rel="noopener noreferrer">PannaDraws</a></div>
          <div className={style.credentials}>Images and content &copy; Tünde Zsámba-Jakus, FairyFish Fabrics</div>
        </div>
      </div>
  );
};
export default Footer;
