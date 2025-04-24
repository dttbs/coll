import React from "react";

export const SectionMy = () => {
  return (
    <>
      <div className="w-11/12 m-auto ">
        <div>
          <h1 className="font-bold mb-12">Каталог Животных</h1>
        </div>
        <div className=" w-8/12 flex justify-evenly mb-12">
          <button className="  cursor-pointer border-1  p-1.5 w-24 bg-[#F52456] rounded-2xl">
            Все
          </button>
          <button className=" cursor-pointer border-1  p-1.5 w-24  rounded-2xl">
            Собаки
          </button>
          <button className=" cursor-pointer border-1  p-1.5 w-24  rounded-2xl">
            Кошки
          </button>
          <button className=" cursor-pointer border-1  p-1.5 w-24  rounded-2xl">
            Попугаи
          </button>
          <button className=" cursor-pointer border-1  p-1.5 w-24  rounded-2xl">
            Хомяки{" "}
          </button>
          <button className=" cursor-pointer border-1  p-1.5 w-24  rounded-2xl">
            Обезьяны
          </button>
        </div>
        <div className="bg-red-600 w-[230px] h-[300px]">
          <p className="rounded-b-xl w-4 h-7 border-1">4</p>
        </div>
      </div>
    </>
  );
};
