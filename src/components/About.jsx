import React from "react";

const About = () => {
  return (
    <div
      name="обо мне"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Обо мне
          </p>
        </div>

        <p className="text-xl mt-20">
         Меня зовут Ислам, и мне 17 лет. До програмирование Я интересавался спортом а точнее самбо,
         я закончил школу в 2020-году после 9-го класса, далее я уже начал интересаваться програмированием
         ну так раз за разом я выбирал какую сферу выбрать и в конце концов выбрал Front End!
        </p>

        <br />

        <p className="text-xl">
        Когда немного начал понимать сферу фронта я думал что сам смогу самому научиться,
        но как я понял 
        любому не помешает наставник и это самое главное.
        и так я начал ходить на курсы, курсы програмирования "Geecktech" там я научился работать так индивидуально так и в команде .
        <br></br>Я уже заканчиваю курсы и ищу стажировку чтобы стать 
        <br></br>"Eщё опытнее чем вчера,а завтра ещё опытнее чем сегодня"
        <br></br>p.s:надеюсь на ваш ответ
        </p>
      </div>
    </div>
  );
};

export default About;
