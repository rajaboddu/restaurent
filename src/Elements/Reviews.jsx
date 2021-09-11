import React, { useState } from "react";
import { comments } from "../data/comments";

//360 rem (80rem displayed.)

const Reviews = () => {
  const [leftMargin, setleftMargin] = useState(0);

  const manageLeftMargin = (direction) => {
    if (direction === "right") {
      leftMargin <= 300
        ? setleftMargin((leftMargin) => leftMargin + 40)
        : setleftMargin();
    } else if (direction === "left") {
      leftMargin >= 0
        ? setleftMargin((leftMargin) => leftMargin - 40)
        : setleftMargin(0);
    }
  };
  return (
    <section className="relative flex mt-2 overflow-x-hidden">
      <button
        onClick={() => manageLeftMargin("left")}
        className="absolute top-10 bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center"
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
              <h4>{comment.name}</h4>
              <p>{comment.date}</p>
            </div>
            <div className="m-2">
              <hr />
              <p>{comment.review}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          manageLeftMargin("right");
        }}
        className="absolute top-10 right-0 bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center"
      >
        <i className="fas fa-angle-double-right text-2xl"></i>
      </button>
    </section>
  );
};

export default Reviews;
