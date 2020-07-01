import React from 'react';
import AuthButton from '../../components/js/AuthButton.js';
import '../css/AuthDiv.css';

const AuthDiv = () => {
    return (
        <div id='unapredi' className='auth-reminder'>
            <h2>Unapredi svoje linkove danas</h2>
            <AuthButton />
        </div>
    )
}

export default AuthDiv;