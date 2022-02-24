import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Home from './Home';
import AboutUs from './AboutUs';
import Tariff from './Tariff';
import OwnAFranchise from './OwnAFranchise';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import TermsCond from './TermsCond';
import Summary from './Summary';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/tariff' component={Tariff} />
        <Route path='/own-a-franchise' component={OwnAFranchise} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/login' component={LoginPage} />
        <Route path='/terms-and-condition' component={TermsCond} />
        <Route path='/summary/:bikeid' component={Summary} />
        

        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;