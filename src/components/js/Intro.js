import React from 'react';
import '../css/Intro.css';
import AuthButton from './AuthButton.js';
import BittyImg from '../../assets/bitlyImg.gif';

const Intro = () => {
    return (
    
        <div className='intro'>
            <div className='description'>
                <h1>Vise od URL shortnera</h1>
                <p>Izgradi svoj brend i stekni uvid u to kako brandirani linkovi doprinose napretku tvog biznisa</p>
                <div className='margin-top'>
                    <AuthButton /> 
                </div>
               
            </div>

            <div className='illustration'>
                <img className='bitly-img' src={BittyImg} alt='bittly gif ' />
            </div>
        </div>
    )
}

export default Intro;