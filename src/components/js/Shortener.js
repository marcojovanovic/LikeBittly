import React from 'react';
import '../css/Shortener.css';
import UrlCardList from './UrlCardList.js';

const Shortener = ({ getInput, renderUrl, urlCards, errorIds }) => {
    return (
        <div className='input-container'>
            <div className='input-container-inner'>
                <form className='shortener-form'>
                    <label htmlFor='link' style={{ position: 'relative' }}>
                        <input onChange={getInput} className={errorIds[0]} id='link' placeholder='Skrati link ovde...' />
                        <span className='no-link' id={errorIds[1]}>Molim vas, dodajte link ...</span>
                        <span className='invalid-url' id={errorIds[2]}>Molim vas, unesite validan link</span>
                    </label>
                    <label htmlFor='submit'>
                        <button className='submit-button' onClick={renderUrl} id='submit'>Skrati Link</button>
                    </label>
                </form>
            </div>
            <UrlCardList urlCards={urlCards}/>
        </div>
    )
}

export default Shortener;
