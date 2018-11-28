import React from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';

const Gallery = () => {
  return (
    <div className={style.gallery}>
      <a className={`${style.galleryLink} ${style.galleryLink__1}`} href="/"><span>Picture 1</span></a>
      <a className={`${style.galleryLink} ${style.galleryLink__about}`} href="/"><span>About</span></a>
      <a className={`${style.galleryLink} ${style.galleryLink__2}`} href="/"><span>Picture 2</span></a>
      <a className={`${style.galleryLink} ${style.galleryLink__3}`} href="/"><span>Picture 3</span></a>
      <a className={`${style.galleryLink} ${style.galleryLink__4}`} href="/"><span>Picture 4</span></a>
      <a className={`${style.galleryLink} ${style.galleryLink__5}`} href="/"><span>Picture 5</span></a>
    </div>
  );
};

const style = {
  gallery: css`
    overflow: hidden;
    margin-top: 50px;
  `,
  galleryLink: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 3px;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background: ${colours.c3};
      height: 0;
      width: 100%;
      opacity: 0.3;
      transition: height .3s ease;
    }
    
    span {
      color: ${colours.c1};
      font-family: ${fonts.f2};
      font-size: 30px;
      position: absolute;
      bottom: -100%;
      left: 50%;
      z-index: 1;
      transform: translateY(50%);
      transition: bottom .3s ease;
    }
    
    &:hover {
      &:before {
        height: 100%;
      }
      span {
        bottom: 50%;
      }
    }
  `,
  galleryLink__about: css`
    background-image: url(/imgs/1.jpg);
    margin-bottom: 50px;
    width: 400px;
    height: 600px;
  `,
  galleryLink__1: css`
    background-image: url(/imgs/4.jpg);
    margin-right: 50px;
    margin-bottom: 50px;
    width: 774px;
    height: 600px;
  `,
  galleryLink__2: css`
    background-image: url(/imgs/3.jpg);
    width: 350px;
    height: 520px;
  `,
  galleryLink__3: css`
    background-image: url(/imgs/2.jpg);
    width: 350px;
    height: 520px;
  `,
  galleryLink__4: css`
    background-image: url(/imgs/6.jpg);
    width: 350px;
    height: 520px;
  `,
  galleryLink__5: css`
    background-image: url(/imgs/7.jpg);
    width: 350px;
    height: 520px;
  `,
};

export default Gallery;
