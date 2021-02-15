import React from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/iconGithub.svg';
import linkedin from '../assets/iconLinkedin.svg';
import gmail from '../assets/iconGmail.svg';

const ContactPage = () => {
  return (
    <div className='info-page__wrapper'>
      <div className='info-page__header'>
        <div className='info-page__header--ribbon__wrapper'>
          <div className='info-page__header--ribbon-back--1 background--blue'></div>
          <div className='info-page__header--ribbon-back--2 background--blue'></div>
          <div className='info-page__header--ribbon-back--3 background--blue'></div>
        </div>
      </div>
      <div className='info-page__content background--pink'>
        <div className='info-page__content--title'>contact me</div>
        <div className='info-page__content--text'>
          <a
            href='https://github.com/krysia1'
            target='_blank'
            className='link--wrapper'
          >
            <img className='link--icon' src={github} alt='github icon'></img>
            <span className='link--text'>GitHub</span>
          </a>
          <a
            href='https://linkedin.com/in/krystyna-łosieczka-589b4a181'
            target='_blank'
            className='link--wrapper'
          >
            <img
              className='link--icon'
              src={linkedin}
              alt='linkedin icon'
            ></img>
            <span className='link--text'>LinkedIn</span>
          </a>
          <div className='link--wrapper'>
            <img
              className='link--icon'
              src={gmail}
              alt='gmail icon'
            ></img>
            <span className='link--text'>krystyna.losieczka@gmail.com</span>
          </div>
        </div>
        <Link
          to='/'
          className='info-page__content--link-home__wrapper background--pink--dark'
        >
          <div className='info-page__content--link-home__text background--blue'>
            go back
          </div>
        </Link>
      </div>
      <div className='info-page__content--ribbon__wrapper'>
        <div className='info-page__content--ribbon-front--1--yellow background--yellow'></div>
        <div className='info-page__content--ribbon-front--2--yellow background--yellow'></div>
        <div className='info-page__content--ribbon-front--3--yellow background--yellow'></div>
        <div className='info-page__content--ribbon-shadow__wrapper'>
          <div className='info-page__content--ribbon-shadow--1 background--pink--dark'></div>
          <div className='info-page__content--ribbon-shadow--2 background--pink--dark'></div>
          <div className='info-page__content--ribbon-shadow--3 background--pink--dark'></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
