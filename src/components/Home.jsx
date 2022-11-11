import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="главная"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <h3 className="text-7xl font-bold inline border-b-4 border-gray-500">Ислам</h3>
              <br />
           <br/>Front End разработчик
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Я изучаю програмирование, а именно фронт энд разработку уже более 9-месяцев.
            И на данный момент изучаю Next.js так как он более похож на реакт.
          </p>

          <div>
            <Link
              to="портфолио"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Портфолио
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            title="Я красавчик"
            className="rounded-2xl mx-auto  md:w-full shadow-md shadow-black-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
