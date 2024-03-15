import React from "react";
import "../styles/Card.css";

const Card = ({
  time,
  price,
  comment,
  discountProcent,
  isCardsSelect,
  onClick,
  timer,
}) => {
  return (
    <article
      onClick={onClick}
      className={`card ${isCardsSelect ? "card_select" : ""}`}
    >
      <div className="card__info-container">
        <h2 className="card__title">{time}</h2>
        {timer > 0 && (
          <p className="card__discount">
            {Math.floor(price - (price * discountProcent) / 100)}₽
          </p>
        )}
        <p className={`${timer > 0 ? "card__price" : "card__discount"} `}>
          {price}₽
        </p>
      </div>

      <p className="card__comment">{comment}</p>

      {timer > 0 && <p className="card__discount-value">{discountProcent}%</p>}
    </article>
  );
};

export default Card;
