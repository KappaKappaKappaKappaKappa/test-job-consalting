import React, { useEffect, useState } from "react";
import PopupCard from "../components/PopupCard";
import "../styles/Popup.css";

const Popup = ({ timer, cards }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [isCardActive, setIsCardActive] = useState(undefined);

  const handleClickCard = (id) => {
    setIsCardActive(id);
  };

  useEffect(() => {
    if (timer === 0) {
      setPopupActive(true);
    }
  }, [timer]);

  const handleClickCloseBtn = () => {
    setPopupActive(false);
  };

  return (
    <div
      className={`popup-container ${
        popupActive ? "popup-container_active" : ""
      }`}
    >
      <div className="popup">
        <p className="hot-offers">горящее предложение</p>
        <button className="popup__close-btn" onClick={handleClickCloseBtn}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#CED1D8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#CED1D8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="title-container">
          <p className="popup__title">
            Не упусти свой&nbsp;
            <p className="popup__title_green">последний шанс</p>
          </p>
          <p className="popup__text">
            Мы знаем, как трудно начать..&nbsp;
            <p className="popup__text_bold">Поэтому!</p>
          </p>
          <p className="popup__discount">
            Дарим скидку для&nbsp;
            <p className="popup__discount_green">лёгкого старта</p> 🏃‍♂️
          </p>
        </div>

        <div className="discounts__container">
          <p className="discounts-text">
            Посмотри, что мы для тебя приготовили 🔥
          </p>
        </div>

        {cards && cards.length > 0 && (
          <div className="popup-cards-container">
            <PopupCard
              card={cards[0]}
              discountProcent={40}
              handleClickCard={handleClickCard}
              isCardActive={isCardActive}
            />
            <PopupCard
              card={cards[1]}
              discountProcent={50}
              handleClickCard={handleClickCard}
              isCardActive={isCardActive}
            />
            <PopupCard
              card={cards[2]}
              discountProcent={60}
              handleClickCard={handleClickCard}
              isCardActive={isCardActive}
            />
          </div>
        )}

        <button className="popup__button">Начать тренироваться</button>
      </div>
    </div>
  );
};

export default Popup;
