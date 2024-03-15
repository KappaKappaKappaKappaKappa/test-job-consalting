export const getCardsData = async () => {
  try {
    const response = await fetch("https://t-pay.iqfit.app/subscribe/list-test");
    const cardsData = await response.json();
    return cardsData;
  } catch (error) {
    console.log(error);
  }
};
