import React from "react";
import "../styles/PopupCard.css";

const PopupCard = ({
  card,
  discountProcent,
  handleClickCard,
  isCardActive,
}) => {
  return (
    card && (
      <article
        className={`popup-card ${
          isCardActive === card.id ? "popup-card_active" : ""
        }`}
        onClick={() => handleClickCard(card.id)}
      >
        <div className="popup-card__top-container">
          <div className="popup-card__price-container">
            <p className="popup-card__period">{card.name}</p>
            <p className="popup-card__price">{card.price}Р</p>
          </div>
          <div className="input">
            <input
              className="input-radio"
              type="radio"
              checked={isCardActive === card.id}
            />
          </div>
        </div>
        <svg
          className="popup-card__line"
          width="136"
          height="2"
          viewBox="0 0 136 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L135 1.00001" stroke="#E7EAF1" strokeLinecap="round" />
        </svg>
        <div className="popup-card__discount-container">
          <p className="popup-card__discount">
            {Math.floor(card.price - (card.price * discountProcent) / 100)}₽
          </p>
          <p className="popup-card__discount-value">{discountProcent}%</p>
        </div>
      </article>
    )
  );
};

export default PopupCard;
