import React from "react";

const History = () => {
  return (
    <div
      className="md:container mx-auto border border-black
    flex flex-col items-center md:flex-row md:flex-nowrap"
    >
      <img src="/restaurent.webp" alt="restaurent" className="w-96 h-96 m-2" />
      <div className="flex flex-col my-auto">
        <div className="titlediv1">
          <div className="titlediv2">ABOUT US</div>
        </div>
        <div className="titlediv1 max-w-xl mt-2">
          <div className="titlediv2">TIMINGS: 10:00A.M - 10:00P.M</div>
        </div>
        <p className="para px-10 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptatem, natus necessitatibus nihil distinctio rem iste quas
          repellendus fugiat suscipit dicta numquam obcaecati ipsa modi earum.
          Eveniet corporis tenetur error. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Cupiditate placeat quos ex dolorem in
          dolores facilis id amet reiciendis? Cupiditate consequuntur maxime
          officiis sequi ipsam quisquam possimus eveniet neque ut. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Distinctio consequuntur
          temporibus asperiores obcaecati optio repellat saepe beatae
          perferendis deleniti nobis omnis adipisci nostrum minima ab, dolore
          voluptatibus ipsum exercitationem error?
        </p>
      </div>
    </div>
  );
};

export default History;
