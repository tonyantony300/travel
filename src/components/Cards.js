import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these epic destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='./images/img-9.jpg'
                    text='Explore the hidden waterfall depp inside the amazon jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='./images/img-2.jpg'
                    text='Experience the Luxury on a private cruise to Bali'
                    label='Luxuary'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='./images/img-3.jpg'
                    text='Set sail in the Atlantic ocean visiting uncharted waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem 
                    src='./images/img-4.jpg'
                    text='Experience football on top of Himalayan Mountains'
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem 
                    src='./images/img-8.jpg'
                    text='Ride through Sahara desert on guided camel tour'
                    label='Adrenaline'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards