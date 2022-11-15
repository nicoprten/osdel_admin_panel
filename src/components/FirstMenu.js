import { Link } from 'react-router-dom';

import './FirstMenu.scss';

export default function FirstMenu(){

    return(
        <div className='first-menu-container'>
            <img className='first-menu-icon' src='./LogoOSdel.png' alt='Osdel logo'/>
            <h2 className='first-menu-title'>Bienvenido al panel de administrador</h2>
            <ul className='first-menu-list'>
                <li className='first-menu-item'><Link className='first-menu-link' to='/noticias'>NOTICIAS</Link></li>
                <li className='first-menu-item'><Link className='first-menu-link' to='/autorizaciones'>AUTORIZACIONES</Link></li>
                <li className='first-menu-item'><Link className='first-menu-link' to='/cartilla'>CARTILLA MÉDICA</Link></li>
            </ul>
        </div>
    )
}