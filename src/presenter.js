
import  Tennis  from "./tennis.js";

const form = document.querySelector("#tennis-form");
const jugador1Button = document.querySelector("#jugador1");
const jugador2Button = document.querySelector("#jugador2");
const div = document.querySelector("#resultado-div");

const tennis = new Tennis();

jugador1Button.addEventListener("click", () => {
  tennis.jugador1++;
  div.innerHTML = "<p>" + tennis.obtenerScore() + "</p>";
});

jugador2Button.addEventListener("click", () => {
  tennis.jugador2++;
  div.innerHTML = "<p>" + tennis.obtenerScore() + "</p>";
});
