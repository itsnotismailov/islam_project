import React from "react";
import shopClothes from "../assets/portfolio/shopClothes.png";
import stormShop from "../assets/portfolio/stormShop.png";
import onlineChat from "../assets/portfolio/online.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shopClothes,
    },
    {
      id: 2,
      src: stormShop,
    },
    {
      id:3,
      src: onlineChat
    }
    
  ];

  return (
    <div
      name="портфолио"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Портфолио
          </p>
          <p className="py-6">Посмотрите некоторые из моих работ прямо здесь</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a target={"_blank"} href="https://kara-balta-moda-eog96juxu-itsnotismailov.vercel.app/">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a target={"_blank"} href="https://github.com/itsnotismailov">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
