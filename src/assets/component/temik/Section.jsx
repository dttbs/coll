import React from "react";
import img from "../../img/temidog.png";
import img2 from "../../icon/phone.png";

export function Section() {
  return (
    <>
      <div className="container1">
        <img src={img} alt="#" />
        <header>
          <nav>
            <p class="Happy">HAPPY PET</p>
            <li>Главная</li>
            <li>Друзья</li>
            <li>О сервисе</li>
            <li>Контакты</li>
            <img class="phone-icon" src={img2} alt="#" />
            <p className="phone">+7 968 658-23-76</p>
          </nav>
        </header>
        <div className="container2">
          <p className="text1">
            Твой новый друг <br />с доставкой на дом
          </p>
          <p className="text2">
            Онлайн-магазин домашних животных <br /> подарит тебе нового друга в
            несколько <br /> кликов. Действуй!
          </p>
          <button className="button">Посмотреть друзей</button>
        </div>
        <div></div>
      </div>
    </>
  );
}
