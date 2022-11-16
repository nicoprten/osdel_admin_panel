import React from 'react';
import {Routes, Route} from 'react-router-dom';

// COMPONENTS
import FirstMenu from './components/FirstMenu';
import News from './components/News';
import AddNew from './components/AddNew';
import Auths from './components/Auths';
import MedicalChart from './components/MedicalChart';
// import LogIn from './components/LogIn';
// import CreateAccount from './components/CreateAccount';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

import './index.scss';

function App({signOut,user}){

    return(
        <>
            <h1>Osdel</h1>
            <Routes>
                <Route path={'/'} element={<FirstMenu user={user} signOut={signOut}/>} />
                <Route path={'/noticias'} element={<News />} />
                <Route path={'/noticias/agregar'} element={<AddNew />} />
                <Route path={'/autorizaciones'} element={<Auths />} />
                <Route path={'/cartilla'} element={<MedicalChart />} />

                {/* <Route path={'/login'} element={<LogIn />} />
                <Route path={'/signin'} element={<CreateAccount />} /> */}

            </Routes>
        </>
    )
}

export default withAuthenticator(App);