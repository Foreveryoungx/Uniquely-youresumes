import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these Epic Transformations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src="images/img-9.jpg"
                        text="Random Resume"
                        label='Fresh Start'
                        path='/services'
                    />
                    <CardItem
                        src="images/img-2.jpg"
                        text="Redesign your resume for the job you want"
                        label='Modify'
                        path='/services'
                    />
                    <CardItem
                        src="images/img-4.jpg"
                        text="get a professional resume that will get you that job interview you always wanted "
                        label='Professional'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
            
        </div>
    )
}

export default Cards;
