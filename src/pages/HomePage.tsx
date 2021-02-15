import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page__container' >
      <div className='home-page__wrapper'>
        <div className='home-page__wrapper__buttons home-page-wrapper__left'>
          <div className='home-page__wrapper__left--1 stripe'></div>
          <div className='home-page__wrapper__left--2 stripe'>
            <Link
              to="/contact"
              className='link-home-page--pink link-home-page__text--pink'
            >
              c<br />o<br />n<br />t<br />a<br />c<br />t<br />
            </Link>
          </div>
          <div className='home-page__wrapper__left--3 stripe'></div>
          <div className='home-page__wrapper__left--4 stripe'></div>
          <div className='home-page__wrapper__left--5 stripe'>
            <Link
              to='/about'
              className='link-home-page--yellow link-home-page__text--yellow'
            >
              a<br />b<br />o<br />u<br />t<br />
            </Link>
          </div>
        </div>
        <div className='home-page__wrapper__middle'>
          <div className='home-page__wrapper__middle__title text-top-bottom'>
            Krystyna Łosieczka
          </div>
        </div>
        <div className='home-page__wrapper__buttons home-page-wrapper__right'>
          <div className='home-page__wrapper__right--1 stripe'></div>
          <div className='home-page__wrapper__right--2 stripe'>
            <Link
              to="/projects"
              className='link-home-page--blue link-home-page__text--blue'
            >
              p<br />r<br />o<br />j<br />e<br />c<br />t<br />s<br />
            </Link>
          </div>
          <div className='home-page__wrapper__right--3 stripe'></div>
          <div className='home-page__wrapper__right--4 stripe'></div>
          <div className='home-page__wrapper__right--5 stripe'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
