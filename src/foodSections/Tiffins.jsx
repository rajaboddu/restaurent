import React from 'react'
import {tiffinItems} from '../data/tiffins'
import Card from '../Elements/Card'

const Tiffins = () => {
    const rating = 5;
    return (
        <div className='mt-2'>
             <h2 className='text-xl text-pink-700 ml-4 font-semibold'>Tiffins</h2>
             <div
        className="gridLayout"
      >
        {tiffinItems.map((item) => (
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

export default Tiffins
