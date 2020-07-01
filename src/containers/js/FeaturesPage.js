import React from 'react';
import FeatureCard from '../../components/js/FeatureCard.js';
import '../css/FeaturesPage.css';
import BrandLogo from '../../assets/icon-brand-recognition.svg';
import RecordLogo from '../../assets/icon-detailed-records.svg';
import CustomizableLogo from '../../assets/icon-fully-customizable.svg';

const FeaturesPage = () => {
    return (
       
        <div id='brand' className='features-section'>
            <div className='features-section-inner'>               
                <div className='feature-title'>
                    <h2>Unapredi svoj brand sa svakim klikom </h2>
                    <p>Brendirani linkovi donose 34% vise klikova nego nebrendirani linkovi, tako da brendirani linkovi direktno donose zaradu tvom brendu </p>
                </div>

                <div className='feature-cards'>
                    <FeatureCard image={BrandLogo} class={'card brand'}>
                        <h3>Podsticu poverenje</h3>
                        <p>Kako se broj klikova povecava, prepoznavanje brenda se povecava. Ljudi postaju sve vise uvereni u integritet i vrednost websita</p>
                    </FeatureCard>
                    <FeatureCard image={RecordLogo} class={'card record'}>
                        <h3>Povecava rezultate</h3>
                        <p>Daje uvid u to ko koristi vase linkove. Znajuci koja je vasa ciljna grupa, moci cete lakse da prilagodite marketing strategiju</p>
                    </FeatureCard>
                    <FeatureCard image={CustomizableLogo} class={'card customizable'}>
                        <h3>Ostvari kontrolu</h3>
                        <p>Unapredi svoj sadrzaj, jer dobijas mogucnost da svom website sadrzaju das dodatnu tezinu u zavisnosti od ciljne grupe</p>
                    </FeatureCard>
                </div>
            </div>
        </div>
       
    )
}

export default FeaturesPage;