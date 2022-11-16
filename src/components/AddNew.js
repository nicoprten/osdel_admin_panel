import { Link } from 'react-router-dom';

import { ArrowCircleLeft } from "phosphor-react";

import './AddNew.scss';

export default function AddNew(){

    return(
        <div className='add-new-container'>
            <div className='add-new-intro-container'>
                <Link className='button-go-back' to='/noticias'>
                    <ArrowCircleLeft size={38} />
                </Link>
                <div className='add-new-title-container'>
                    <h2 className='add-new-title'>Nueva noticia</h2>
                    <p className='add-new-desc'>Llena los campos para agregar una nueva noticia.</p>
                </div>
            </div>
        </div>
    )
}