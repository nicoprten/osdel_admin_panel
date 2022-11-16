import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowCircleLeft, UploadSimple } from "phosphor-react";

import './AddNew.scss';

import { API,Amplify, Storage, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

import uploadToS3 from './../S3/mutations';

export default function AddNew(){
    console.log(uploadToS3)
    const [news, setNews] = useState({
        title: '',
        desc: '',
        img: ''
    })

    function newNews(e){
        e.target.files ? 
            setNews({
                ...news, 
                [e.target.name]: e.target.files[0]
            })
        :
            setNews({
                ...news, 
                [e.target.name]: e.target.value
            });
    }

    async function submitNews(){
        const data = {
            title: news.title,
            body: news.desc
        }
        const newNews = await API.graphql({
            query:mutations.createNews,
            variables:{input:data},
          authMode:'API_KEY'
        })
        console.log(newNews)
        const newNewsId = newNews.data.createNews.id;
        uploadToS3( `${newNewsId}.jpg`, news.img,).then(r => console.log(r))
    }

    return(
        <div className='add-new-container'>
            <div className='add-new-intro-container'>
                <Link className='button-go-back' to='/noticias'>
                    <ArrowCircleLeft size={38} />
                </Link>
                <div className='add-new-title-container'>
                    <h2 className='add-new-title'>Nueva noticia</h2>
                    <p className='add-new-desc'>Llena los campos para agregar una nueva noticia.</p>
                    <form className='add-new-form-container'>
                        <input type='text' name='title' placeholder='Ingrese el título' onChange={(e) => newNews(e)}></input>
                        <textarea type='text' name='desc' placeholder='Ingrese una descripción' onChange={(e) => newNews(e)}></textarea>
                        <input type='file' name='img' accept='image/png, image/jpeg' onChange={(e) => newNews(e)}></input>
                    </form>
                    <button className='add-new-button' onClick={() => submitNews()}>
                        <span>SUBIR</span>
                        <UploadSimple size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}