import React, { useState } from "react";
import { comments } from "../data/comments";
import { Para, SubTitle } from "../designComponents/Typography";

//360 rem (80rem displayed.)

const Reviews = () => {
  const [leftMargin, setleftMargin] = useState(0);

  const manageLeftMargin = (direction) => {
    if (direction === 'right' && leftMargin<356) {
      setleftMargin(leftMargin => leftMargin + 22)
    }
    else if(direction === 'left' && leftMargin>0) {
      setleftMargin(leftMargin => leftMargin - 22)
    }
  };
  return (
    <section className="relative flex mt-2 overflow-x-hidden">
      <button
        onClick={() => manageLeftMargin("left")}
        className="absolute top-16 bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center"
      >
        <i className="fas fa-angle-double-left text-2xl"></i>
      </button>
      <div
        className="flex transition-all duration-1000 ease-in"
        style={{ marginLeft: `-${leftMargin}rem` }}
      >
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex flex-col bg-gray-400 shadow-lg rounded-xl w-80 m-4"
          >
            <div className="flex justify-between m-2">
              <SubTitle>{comment.name}</SubTitle>
              <SubTitle>{comment.date}</SubTitle>
            </div>
            <div className="m-2">
              <hr />
              <Para>{comment.review}</Para>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          manageLeftMargin("right");
        }}
        className="absolute top-14 right-0 bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center"
      >
        <i className="fas fa-angle-double-right text-2xl"></i>
      </button>
    </section>
  );
};

export default Reviews;
