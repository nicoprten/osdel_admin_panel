import { Link } from 'react-router-dom';

import { PlusCircle } from "phosphor-react";

import './News.scss';

export default function News(){

    let news = [
        {
            title: 'New 01',
            text: 'Gaming & eSports Dashboard designed by Boris Wick for R A G E B I T E.',
            img: 'https://i.pinimg.com/originals/42/92/75/429275a65b73c528a6fbf33c08ca06e1.png',
            creator: {
                name: 'Nicolino Jejote',
                img: 'https://i.pinimg.com/75x75_RS/ec/0d/93/ec0d93ab36c4f101cd5687f00680f512.jpg',
                date: '10/09/2022'
            }
        },
        {
            title: 'New 02',
            text: 'Stemo Dashboard designed by Serhiy Ozhibko. Connect with them on Dribbble; the global community for designers and creative professionals.',
            img: 'https://i.pinimg.com/originals/42/92/75/429275a65b73c528a6fbf33c08ca06e1.png',
            creator: {
                name: 'Pepe Grillo',
                img: 'https://i.pinimg.com/75x75_RS/ec/0d/93/ec0d93ab36c4f101cd5687f00680f512.jpg',
                date: '10/09/2022'
            }
        },
        {
            title: 'New 03',
            text: '#Exploration - Skateboard Video Platform - Video Player designed by Dwinawan for Paperpillar. Connect with them on Dribbble; the global community for designers and creative professionals. ',
            img: 'https://i.pinimg.com/originals/42/92/75/429275a65b73c528a6fbf33c08ca06e1.png',
            creator: {
                name: 'Miriam Jornata',
                img: 'https://i.pinimg.com/75x75_RS/ec/0d/93/ec0d93ab36c4f101cd5687f00680f512.jpg',
                date: '10/09/2022'
            }
        },
        {
            title: 'New 04',
            text: '#Exploration - Skateboard Video Platform - Trending designed by Dwinawan for Paperpillar. Connect with them on Dribbble; the global community for designers and creative professionals. ',
            img: 'https://i.pinimg.com/originals/42/92/75/429275a65b73c528a6fbf33c08ca06e1.png',
            creator: {
                name: 'Flaco Vazquez',
                img: 'https://i.pinimg.com/75x75_RS/ec/0d/93/ec0d93ab36c4f101cd5687f00680f512.jpg',
                date: '10/09/2022'
            }
        },

    ];

    return(
        <div className='news'>
            <div className='news-add-container'>
                <h2 className='news-title'>Noticias</h2>
                <Link className='news-add-button' to='/noticias/agregar'>
                    <PlusCircle size={32} />
                    <span>NUEVA NOTICIA</span>
                </Link>
            </div>
            {news?.map(n =>
                <div className='news-container'>
                    <img className='news-img' src={n.img} alt={n.title}/>
                    <div className='news-info-container'>
                        <h3 className='news-info-title'>{n.title}</h3>
                        {n.text.length > 140 ?
                            <>
                                <p className='news-text'>
                                    {n.text.slice(0, 140)}...
                                    <button className='news-see-more'>Ver más</button>
                                </p>
                                
                            </>
                            :
                            <p className='news-text'>{n.text}</p>}
                        <div className='news-create-buttons-container'>

                            <div className='news-buttons-container'>
                                <button className='news-button'>VER DETALLE</button>
                                <button className='news-button'>EDITAR</button>
                                <button className='news-button'>ELIMINAR</button>
                            </div>

                            <div className='news-createby-container'>
                                <div className='news-createby-user'>
                                    <img className='news-createby-img' src={n.creator.img} alt={n.creator.name} />
                                    <p className='news-createby-name'>{n.creator.name}</p>
                                </div>
                                <p className='news-createby-date'>{n.creator.date}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>    
            )}
        </div>
    )
}