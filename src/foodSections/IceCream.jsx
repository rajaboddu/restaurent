import React from 'react'
import Card from '../Elements/Card';
import {iceCreamItems} from '../data/icecreams'

const IceCream = () => {
    const rating = 5;
    return (
        <div className='mt-2'>
             <h2 className='text-xl text-pink-700 ml-4 font-semibold'>Ice Creams</h2>
             <div
        className="gridLayout"
      >
        {iceCreamItems.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            type={item.type}
            cost={item.cost}
            rating={rating}
            pic={item.Pic}
          />
        ))}
      </div>
        </div>
    )
}

export default IceCream
