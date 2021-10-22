import React from 'react'
import SpecialCard from '../../designComponents/cards/SpecialityCard'
import biryani from "../../assests/FoodPictures/biryani2.webp";
import biryani2 from "../../assests/FoodPictures/biryani3.webp";
import chickenDum from "../../assests/FoodPictures/chicken-dum.webp";
import onionRavva from "../../assests/FoodPictures/onion-ravva.webp";
import ice3 from "../../assests/FoodPictures/icecreams3.webp";
import idly from "../../assests/FoodPictures/idli.webp";

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
            <p className='subtitle2'>SPECIALS AND OFFERS</p >
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
