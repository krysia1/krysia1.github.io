import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className='info-page__wrapper'>
      <div className='info-page__header'>
      <div className='info-page__header--ribbon__wrapper'>
          <div className='info-page__header--ribbon-back--1 background--yellow'></div>
          <div className='info-page__header--ribbon-back--2 background--yellow'></div>
          <div className='info-page__header--ribbon-back--3 background--yellow'></div>
        </div>
      </div>
      <div className='info-page__content background--blue'>
        <div className='info-page__content--title'>my projects</div>
        <Link
          to='/'
          className='info-page__content--link-home__wrapper background--blue--dark'
        >
          <div className='info-page__content--link-home__text background--yellow'>go back</div>
        </Link>
      </div>
      <div className='info-page__content--ribbon__wrapper'>
        <div className='info-page__content--ribbon-front--1--pink background--pink'></div>
        <div className='info-page__content--ribbon-front--2--pink background--pink'></div>
        <div className='info-page__content--ribbon-front--3--pink background--pink'></div>
        <div className='info-page__content--ribbon-shadow__wrapper'>
          <div className='info-page__content--ribbon-shadow--1 background--blue--dark'></div>
          <div className='info-page__content--ribbon-shadow--2 background--blue--dark'></div>
          <div className='info-page__content--ribbon-shadow--3 background--blue--dark'></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
