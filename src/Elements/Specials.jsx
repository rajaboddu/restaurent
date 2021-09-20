import React from 'react'
import SpecialCard from '../designComponents/SpecialityCard'
import biryani from "../FoodPictures/biryani2.webp";
import biryani2 from "../FoodPictures/biryani3.webp";
import chickenDum from "../FoodPictures/chicken-dum.webp";
import onionRavva from "../FoodPictures/onion-ravva.webp";
import ice3 from "../FoodPictures/icecreams3.webp";
import idly from "../FoodPictures/idli.webp";
import { Title, SubTitle2 } from '../designComponents/Typography';

const specialItems = [
    { id: 1, name: 'Special Dum + Chicken Fry Piece Biryani', cost: 20,img:biryani },
    { id: 2, name: 'Chicken Lollipops + Mughali Biryani', cost: 40, img:biryani2 },
    { id: 3, name: 'Chicken Dum + Mughali Biryani', cost: 40, img:chickenDum },
    { id: 4, name: 'Ghee Dosa + Masala Dosa', cost: 60, img: onionRavva },
    { id: 5, name: 'Idly + Mysore Bonga', cost: 30, img: idly },
    { id: 6, name: 'Vineela Milk Shake+ Oreo Milk Shake', cost: 100, img:ice3}
]

const Specials = () => {
    return (
        <div className='mt-2'>
            <SubTitle2>SPECIALS AND OFFERS</SubTitle2>
        <div className='mt-3 flex flex-col items-center space-y-2
         md:grid md:grid-cols-3 md:grid-rows-2 md:gap-2 md:justify-items-center
          md:max-w-screen-2xl md:mx-auto md:space-y-0'>
            {specialItems.map(item => <SpecialCard key={item.id}
                name={item.name} cost={item.cost} img={item.img}/>)}
        </div>
        </div>
    )
}

export default Specials
