import React from "react";

const StarIcons = ({ rating }) => {
  const iconClass = "fas fa-star text-yellow-500 text-xs";
  const starsRating = (no) => {
    const stars = []
    for (let i = 1; i <= no; i++)
      stars.push(<i key={i} className={iconClass}></i>)
    return stars
  }
  return (
    <div className="flex space-x-1">
     {starsRating(rating)}
      <span className="text-xs font-semibold text-gray-600">{rating}</span>
    </div>
  );
};

export default StarIcons;
