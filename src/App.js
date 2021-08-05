import React from 'react';
//import pages
import AboutUs from './pages/AboutUs';
//Global style
import GlobalStyle from './components/GlobalStyle';

import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//Router
import {Switch,Route,useLocation} from "react-router-dom"
//animation
import {AnimatePresence} from 'framer-motion';


function App() {
    const locaation= useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={locaation} key={locaation.pathname} >
        <Route path='/' exact><AboutUs /></Route>
        <Route path='/contact'><ContactUs /></Route>
        <Route path='/work' exact><OurWork /></Route>
        <Route path='/work/:id'><MovieDetail /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
