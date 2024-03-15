import "./styles/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import Popup from "./components/Popup";

function App() {
  const [timer, setTimer] = useState(2);
  const [cards, setCards] = useState(undefined);
  return (
    <>
      <Header timer={timer} setTimer={setTimer} />
      <MainPage timer={timer} cards={cards} setCards={setCards} />
      <Popup timer={timer} cards={cards} />
    </>
  );
}

export default App;
