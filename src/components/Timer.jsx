import React from "react";
import { useEffect } from "react";
import "../styles/Timer.css";

const Timer = ({ timer, setTimer }) => {
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, setTimer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return { minutes, seconds };
  };
  return (
    <div>
      <div className="timer-container">
        <div className="timer">
          <p
            className={`timer-number ${timer < 30 ? "timer-number_pulse" : ""}`}
          >
            {formatTime(timer).minutes}
          </p>
          <p className="timer-text">минут</p>
        </div>
        <div>
          <svg
            width="5"
            height="15"
            viewBox="0 0 5 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle cx="2.50366" cy="2.5" r="2.5" fill="#01B9C5" />
              <circle cx="2.50366" cy="12.5" r="2.5" fill="#01B9C5" />
            </g>
          </svg>
        </div>
        <div className="timer">
          <p
            className={`timer-number ${timer < 30 ? "timer-number_pulse" : ""}`}
          >
            {formatTime(timer).seconds}
          </p>
          <p className="timer-text">секунд</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
