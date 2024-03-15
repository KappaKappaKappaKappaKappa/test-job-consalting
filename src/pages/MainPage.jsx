import React from "react";
import ka4ok from "../images/ka4ok.png";
import SmallCardsList from "../components/SmallCardsList";
import BigCard from "../components/BigCard";
import "../styles/MainPage.css";
import { useState, useEffect } from "react";
import { getCardsData } from "../api/api";

const MainPage = ({ timer, cards, setCards }) => {
  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const data = await getCardsData();
        setCards(data);
        setSelectedCard(data[0].id);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardsData();
  }, [setCards]);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <section className="main-page">
      <h1 className="title">Выберите подходящий тарифный план</h1>
      <div className="info-container">
        <img className="image" src={ka4ok} alt="ka4ok" />
        <span className="image__opacity"></span>
        <div className="cards-container">
          <SmallCardsList
            timer={timer}
            cards={cards}
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
          />
          <BigCard
            timer={timer}
            cards={cards}
            discountValue={70}
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
          />
          <p className="text">
            Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
            чем за 1 месяц
          </p>
          <div className="rules-container">
            <input className="rules-checkbox" id="checkbox" type="checkbox" />

            <p className="rules">
              Я соглашаюсь с{" "}
              <a className="rules__link" href="#">
                Правилами сервиса
              </a>{" "}
              и условиями{" "}
              <a className="rules__link" href="#">
                Публичной оферты.
              </a>
            </p>
          </div>
          <button className="button-buy">Купить</button>
          <p className="buy-description">
            Нажимая «Купить», Пользователь соглашается на автоматическое
            списание денежных средств по истечению купленного периода.
            Дальнейшие списания по тарифам участвующим в акции осуществляются по
            полной стоимости согласно оферте.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
