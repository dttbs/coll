import React from "react";
import toilet from "../../icon/toilet.svg";
import dog from "../../img/dog.png";
import monkey from "../../img/monkey.png";
import cat from "../../img/cat.png";
import humster from "../../img/humster.png";
import turtle from "../../img/turtle.png";
import parrot from "../../img/parrot.png";
import pet from "../../icon/pet.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Анимация при скролле
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSlide = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export function Hanif() {
  return (
    <div className="bg-[#FBF6ED] ">
      <style>
        {`
  .swiper-button-next,
  .swiper-button-prev {
    color: #F52456;
    background-color: white;
    border-radius: 120px;
    padding: 25px;
    box-shadow: 0 0 40px rgba(0,0,0,0.1);
    width: 40px;
    height: 40px;
    top: 40%;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
    font-weight: bold;
  }

  .swiper-button-disabled {
    opacity: 1;
    pointer-events: none;
  }
`}
      </style>

      <div className="w-11/12 m-auto">
        <h1 className="font-bold mb-12 text-[25px]">Каталог Животных</h1>
        <motion className="whileInView={{ opacity: 1, y: 0 }}">
          <div className="w-8/12 flex justify-evenly mb-12 flex-wrap gap-4">
            {["Все", "Собаки", "Кошки", "Попугаи", "Хомяки", "Обезьяны"].map(
              (label) => (
                <button
                  key={label}
                  className="cursor-pointer border border-spacing-3 p-1.5 w-24 hover:bg-[#D41E48]  rounded-2xl"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </motion>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-12"
        >
          {[
            {
              img: dog,
              name: "Доберман",
              desc: "Отличный новый друг для всей семьи, охраняет и обожает",
              type: "СОБАКА",
              nature: "ХИЩНИК",
              price: "5900 p.",
            },
            {
              img: cat,
              name: "Вислоухая кошка",
              desc: "Прекрасная подруга на дождливые холодные времена",
              type: "Кошка",
              nature: "Хищник",
              price: "7900 p.",
            },
            {
              img: monkey,
              name: "Шимпанзе",
              desc: "Домашний питомец для тех, кому не хочется скучать",
              type: "Обезьяна",
              nature: "Травоядная",
              price: "15900 p.",
            },
            {
              img: humster,
              name: "Хомяк",
              desc: "Отличный новый друг для всей семьи, мягкий, вкусный",
              type: "Хомяк",
              nature: "Грызун",
              price: "5900 p.",
            },
            {
              img: parrot,
              name: "Попугай",
              desc: "Прекрасная друг на дождливые холодные времена (будет чем питаться)",
              type: "Попугай",
              nature: "Птица",
              price: "5900 p.",
            },
            {
              img: turtle,
              name: "Черепаха",
              desc: "Домашний питомец для тех, кому не хочется скучать",
              type: "Черепаха",
              nature: "Пресмыкающая",
              price: "15900 p.",
            },
          ].map((petData, index) => (
            <SwiperSlide key={index}>
              <AnimatedSlide>
                <div className="shadow-lg w-[290px] bg-white rounded-xl h-[505px]">
                  <div className="w-11/12 m-auto">
                    <div className="flex justify-between mt-2">
                      <p>4 месяца</p>
                      <p>{index % 2 === 0 ? "2 награды" : "1 награда"}</p>
                      <img src={toilet} alt="" />
                    </div>
                    <div className="mt-10">
                      <img
                        className="w-full h-[150px] object-contain"
                        src={petData.img}
                        alt={petData.name}
                      />
                    </div>
                    <div className="mt-10">
                      <h1 className="font-bold">{petData.name}</h1>
                      <p className="text-[14px] mt-5">{petData.desc}</p>
                      <div className="mt-5">
                        <div className="flex space-x-6 items-center text-sm font-medium text-gray-800">
                          <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            <span>{petData.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>{petData.nature}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-11/12 justify-between mt-5 mb-4">
                      <p className="text-green-700 text-[20px] font-bold">
                        {petData.price}
                      </p>
                      <img src={pet} alt="" />
                    </div>
                  </div>
                </div>
              </AnimatedSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
