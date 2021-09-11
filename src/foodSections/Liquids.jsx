import React from 'react'
import { liquidItems } from '../data/liquids'
import Card from '../Elements/Card';

const Liquids = () => {
    const rating = 4;
    return (
        <div className='mt-2'>
            <h2 className='text-xl text-pink-700 ml-4 font-semibold'>Beverages</h2>
        <div
          className="gridLayout"
        >
          {liquidItems.map((item) => (
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
    );
}

export default Liquids
