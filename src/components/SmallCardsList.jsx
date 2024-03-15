import React from "react";
import Card from "./Card";
import "../styles/SmallCardsList.css";

const SmallCardsList = ({ cards, selectedCard, handleCardClick, timer }) => {
  return (
    cards && (
      <div className="cards">
        <Card
          isCardsSelect={selectedCard === cards[0].id}
          id={cards[0].id}
          time={cards[0].name}
          price={cards[0].price}
          comment="Чтобы просто начать 👍🏻"
          discountProcent={30}
          onClick={() => handleCardClick(cards[0].id)}
          timer={timer}
        />
        <Card
          isCardsSelect={selectedCard === cards[1].id}
          id={cards[1].id}
          time={cards[1].name}
          price={cards[1].price}
          comment="Привести тело впорядок 💪🏻"
          discountProcent={40}
          onClick={() => handleCardClick(cards[1].id)}
          timer={timer}
        />
        <Card
          isCardsSelect={selectedCard === cards[2].id}
          id={cards[2].id}
          time={cards[2].name}
          price={cards[2].price}
          comment="Изменить образ жизни 🔥"
          discountProcent={50}
          onClick={() => handleCardClick(cards[2].id)}
          timer={timer}
        />
      </div>
    )
  );
};

export default SmallCardsList;
