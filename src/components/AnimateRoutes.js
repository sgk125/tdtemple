import React from 'react';
import Home from './home/Home';
// import Gallery, { gallery } from './components/home/Gallery';
import Seva from './home/Seva';
import Gallery1 from './home/Gallery1.jsx';
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';
import Contact1 from './home/Contact1';
import AboutTemple from './home/AboutTemple';
import AboutInstitutions from './home/AboutInstitutions';
import AboutManagement from './home/AboutManagement';
import AboutUpadevathas from './home/AboutUpadevathas';

const AnimateRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>

                <Route path='/' exact element={<Home />} />
                <Route path='/contact-us' element={<Contact1 />} />
                <Route path='/gallery' element={<Gallery1 />} />
                <Route path='/seva' element={<Seva />} />
                <Route path='/about-temple' element={<AboutTemple />} />
                <Route path='/institutions' element={<AboutInstitutions />} />
                <Route path='/upa-devatha-mandir' element={<AboutUpadevathas />} />
                <Route path='/management' element={<AboutManagement />} />

            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoutes