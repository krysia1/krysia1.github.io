import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='info-page__wrapper'>
      <div className='info-page__header'>
        <div className='info-page__header--ribbon__wrapper'>
          <div className='info-page__header--ribbon-back--1 background--pink'></div>
          <div className='info-page__header--ribbon-back--2 background--pink'></div>
          <div className='info-page__header--ribbon-back--3 background--pink'></div>
        </div>
      </div>
      <div className='info-page__content background--yellow'>
        <div className='info-page__content--title'>about me</div>
        <div className='info-page__content--text'>
          Hi! My name is <span className='text-pink'>Krysia</span> and I'm an aspiring programmer. 
          Technologies I'm focused on right now are <span className='text-blue'>HTML</span>, <span className='text-blue'>SCSS</span>, <span className='text-blue'>JavaScript</span> and <span className='text-blue'>React</span>. <br></br>
          Besides writing code I like DIY stuff like embroidery or knitting and
          of course watching movies and listening to the music, especially from the sixties.
          </div>
        <Link
          to='/'
          className='info-page__content--link-home__wrapper background--yellow--dark'
        >
          <div className='info-page__content--link-home__text background--pink'>
            go back
          </div>
        </Link>
      </div>
      <div className='info-page__content--ribbon__wrapper'>
        <div className='info-page__content--ribbon-front--1--blue background--blue'></div>
        <div className='info-page__content--ribbon-front--2--blue background--blue'></div>
        <div className='info-page__content--ribbon-front--3--blue background--blue'></div>
        <div className='info-page__content--ribbon-shadow__wrapper'>
          <div className='info-page__content--ribbon-shadow--1 background--yellow--dark'></div>
          <div className='info-page__content--ribbon-shadow--2 background--yellow--dark'></div>
          <div className='info-page__content--ribbon-shadow--3 background--yellow--dark'></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
