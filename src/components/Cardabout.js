import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Traditional food of Samarkand</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.pinimg.com/originals/f1/3f/e4/f13fe41fbdd17ca84d2ce091c2f78bca.jpg'
              text='The main dish in Samarkand is called plov'
              label='PLOV |PILAF'
              path='/services'
            />
            <CardItem
              src='https://kalpak-travel.com/wp-content/uploads/2019/04/manty-uzbek-cuisine.jpg'
              text='Manty is a dumpling stuffed with minced meat, fat and onions'
              label='MANTY'
              path='/services'
            />
            <CardItem
              src='https://bklyner.com/wp-content/uploads/2014/09/Kavkaz_5-bicubic.jpg'
              text='Shashlyk is a very popular meal in a region stretching from Central Asia'
              label='MEAT SKEWER – SHASHLYK'
              path='/services'
            />
            <CardItem
              src='https://kalpak-travel.com/wp-content/uploads/2019/04/samsa-uzbekistan-food-cuisine.jpg'
              text='Samsa is another type of local fast food'
              label='SAMSA'
              path='/products'
            />
            <CardItem
              src='https://www.doca-tours.com/wp-content/uploads/2016/02/0-436.jpg'
              text='In Samarkand, a meal without bread is considered incomplete.'
              label='BREAD – LEPYOSHKA, TANDYR NAN, PATYR NAN'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
