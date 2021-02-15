import React, { FunctionComponent } from 'react';
import { Switch, useLocation, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import './styles/main.scss';

interface RouteInterface {
  path: string;
  name: string;
  Component: FunctionComponent;
}

const routes: Array<RouteInterface> = [
  { path: '/', name: 'MainPage', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/projects', name: 'Projects', Component: ProjectsPage },
  { path: '/contact', name: 'Contact', Component: ContactPage },
];

const AnimatedSwitch = withRouter(({ location }) => (
  // <TransitionGroup >
  //   <CSSTransition
  //     key={location.key}
  //     classNames='slide'
  //     timeout={300}
  //   >
      <Switch location={location}>
        {routes.map(({ path, Component }) => (
          <Route exact path={path} component={Component} key={path} />
        ))}
      </Switch>
  //   {/* </CSSTransition>
  // </TransitionGroup> */}
));

const App = () => {


  return (
    <div className='App'>
      <AnimatedSwitch />
    </div>
  );
};

export default App;
