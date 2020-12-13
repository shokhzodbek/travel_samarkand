import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
export default function About() {
  return <div className='about'>
    <div className="text-area">
     <h3>Samarkand</h3>
     <p>
     In 2001 Samarkand was named a UNESCO World Heritage Site as a historic crossroads of cultures. The city was founded in the 7th century BC and later became the capital of the Timurid Empire in the 14th century AD. For history buffs and architecture lovers, Samarkand is a true paradise.

Samarkand is a real gem along the Silk Road, with numerous things to do in Samarkand it’s easy to see why its a favorite for many travelers ot Uzbekistan. I’d recommend at least three days when you travel to Samarkand as to not feel too rushed seeing all the city has to offer. The best months to visit are in April, May, September, and October for the best temperatures. Personally, I think the winter, November-March is the best time to avoid crowds as temperatures can be quite cold. Summers in Uzbekistan are dreadfully hot and best avoided. Learn everything you need to know about the great city in this Samarkand Travel Guide.
     </p>
     <p>There are enough sites to see and things to do in Samarkand to warrent at least two days in the city, though three days or more will give you a bit more time to enjoy the city without it feeling really rushed. Here are the tope 14 things to do in Samarkand:</p>
      <p>Shirdor Madrasa, Ulugh Bek Madrasa and Tilla Kari Madrasa make up Samarkand’s most well known landmark- the Registan Square. The Registan is the heard of the city, dating back to the Timirid Era. Try to get here right at 8 am to beat the crowds and tour groups. Admission: 40,000 UZS.</p>
    </div>
       <div className="card">
       <CardItem
              src='https://www.advantour.com/img/uzbekistan/samarkand/registan.jpg'
              text='The Registan was the heart of the ancient city of Samarkand of the Timurid Empire'
              label="Registan square"
              path='/sign-up'
            />
             <CardItem
              src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2M4M2MxOGFmLTgxMGEtNDNmOC1iZjE5LTBjNTRlYjExODllZmViMmRmNTBmOGE4ZmNlMmUwNF9SOEdXUkEuanBnIl0sWyJwIiwidGh1bWIiLCJ4MzkwPiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/R8GWRA.jpg'
              text="Incomparable historical monuments in Central Asia"
              label='Shah-i-Zinda'
              path='/sign-up'
            />
             <CardItem
              src='https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20monti,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1576431705/dxmg6po9eoaotrvpjfxl.jpg'
              text='The Gūr-i Amīr or Guri Amir is a mausoleum of the Turco-Mongol conqueror Timur in Samarkand,'
              label='Gur-e Amir Сomplex'
              path='sign-up'
            />
       </div>
    </div>
}
