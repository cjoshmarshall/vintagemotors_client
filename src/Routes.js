import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Home from './Home';
import AboutUs from './AboutUs';
import Tariff from './Tariff';
import OwnAFranchise from './OwnAFranchise';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Login from './LoginPage';
import TermsCond from './TermsCond';
import Summary from './Summary';

function Path() {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/tariff' element={<Tariff />} />
                <Route path='/own-a-franchise' element={<OwnAFranchise />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/terms-and-condition' element={<TermsCond />} />
                <Route path='/summary' element={<Summary />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Path;
