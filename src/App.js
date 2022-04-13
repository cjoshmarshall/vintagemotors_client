import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tariff from './pages/Tariff';
import OwnAFranchise from './pages/OwnAFranchise';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import TermsCond from './pages/TermsCond';
import Summary from './pages/Summary';



function App() {
    
const ProtectedRoute=(props)=>{
  if(localStorage.getItem("user")){
    return <Route {...props} />
  }else{
    return <Redirect to="/login" />
  }
}

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
        <ProtectedRoute path='/summary/:bikeid' component={Summary} />
        

        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;