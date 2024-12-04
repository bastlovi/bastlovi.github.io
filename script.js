"use strict";
const countDown = () => {
  const targetDate = new Date("December 12, 2024 21:10:30").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Odpočet vypršel!";
      return;
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
};
countDown();
