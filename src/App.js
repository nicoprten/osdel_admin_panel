import React from 'react';
import {Routes, Route} from 'react-router-dom';

// COMPONENTS
import FirstMenu from './components/FirstMenu';
import News from './components/News';
import Auths from './components/Auths';
import MedicalChart from './components/MedicalChart';
// import LogIn from './components/LogIn';
// import CreateAccount from './components/CreateAccount';

import './index.scss';

export default function App(){

    return(
        <>
            <h1>Osdel</h1>
            <Routes>
                <Route path={'/'} element={<FirstMenu />} />
                <Route path={'/noticias'} element={<News />} />
                <Route path={'/autorizaciones'} element={<Auths />} />
                <Route path={'/cartilla'} element={<MedicalChart />} />

                {/* <Route path={'/login'} element={<LogIn />} />
                <Route path={'/signin'} element={<CreateAccount />} /> */}

            </Routes>
        </>
    )
}