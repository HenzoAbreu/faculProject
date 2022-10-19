import React from "react";

export function Post() {
  const username = "pedro";
  const img =
    "https://images.kabum.com.br/produtos/fotos/81132/81132_index_gg.jpg";
  const userImg =
    "https://images6.kabum.com.br/produtos/fotos/134176/cadeira-gamer-tempest-husky-gaming-black-black-700_1619705487_m.jpg";
  const caption = "vai toma no cu";
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className="mr-3 h-12 w-12 rounded-full border 
          object-contain p-1"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
      </div>

      {/*img */}
      <img src={img} className="w-full object-cover" />

      {/*buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 "></div>
      </div>

      {/*caption*/}
      <p className="truncate p-5"></p>
      <span className="mr-1 font-bold">{username} </span>
      {caption}

      {/*comments*/}

      {/*input box*/}
      <form className="flex items-center p-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}
