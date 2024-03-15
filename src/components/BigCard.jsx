import React from "react";
import "../styles/BigCard.css";

const BigCard = ({
  discountValue,
  cards,
  selectedCard,
  handleCardClick,
  timer,
}) => {
  return (
    cards &&
    cards.length > 1 && (
      <article
        onClick={() => handleCardClick(cards[3].id)}
        className={`big-card ${
          selectedCard === cards[3].id ? "big-card_select" : ""
        }`}
      >
        <h2 className="big-card__title">{cards[3].name}</h2>
        <div className="big-card__praces">
          {timer > 0 && <p className="big-card__price">{cards[3].price}₽</p>}
          <p
            className={`${
              timer > 0 ? "big-card__discount" : "big-card__price"
            }`}
          >
            {Math.floor(
              cards[3].price + (cards[3].price * discountValue) / 100
            )}
            ₽
          </p>
        </div>

        <p className="big-card__comment">
          Всегда быть в форме и поддерживать своё здоровье ⭐️
        </p>
        {timer > 0 && (
          <p className="big-card__discount-value">{discountValue}%</p>
        )}
      </article>
    )
  );
};

export default BigCard;
