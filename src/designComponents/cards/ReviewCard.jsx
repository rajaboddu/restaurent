import React from 'react'

const ReviewCard = ({comment}) => {
    return (
        <div
            className="flex flex-col bg-gray-400 shadow-lg rounded-xl w-80 m-4"
          >
            <div className="flex justify-between m-2">
              <p className='subtitle1'>{comment.name}</p>
              <p className='subtitle1'>{comment.date}</p>
            </div>
            <div className="m-2">
              <hr />
              <p className='para'>{comment.review}</p>
            </div>
          </div>
    )
}

export default ReviewCard
