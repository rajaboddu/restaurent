import React from "react";

const History = () => {
  return (
    <div className="md:container mx-auto border border-black flex flex-col items-center md:flex-row md:flex-nowrap">
      <img
        src="/restaurent.webp"
        alt="restaurent-image"
        className="w-96 h-96 m-2"
      />
      <div className="flex flex-col my-auto">
        <h1 className="text-4xl font-normal text-white bg-black text-center w-56 mx-auto p-1">
          ABOUT US
        </h1>
        <p className="text-lg text-left italic px-10 mt-2 flex-auto">
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
