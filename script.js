const explosion = new Audio("https://www.fesliyanstudios.com/play-mp3/561");
const cristales = new Audio("https://www.fesliyanstudios.com/play-mp3/5659");
const perro = new Audio(
  "dog-bark.mp3"
);
const risa = new Audio(
  "laughter3.mp3"
);
const nena = new Audio(
  "nena.mp3"
);

const ramala = new Audio(
  "ramala.mp3"
);

const buttonCristales = document.querySelector("#cristales");
const buttonExplosion = document.querySelector("#explosion");
const buttonPerro = document.querySelector("#perro");
const buttonRisa = document.querySelector("#risa");
const buttonRamala = document.querySelector("#ramala");
const buttonNena = document.querySelector("#nena");

const stopAll = () => {
  cristales.pause();
  explosion.pause();
  perro.pause();
  risa.pause();
  ramala.pause();
  nena.pause();
};

buttonCristales?.addEventListener("click", () => {
  stopAll();
  cristales.play();
});

buttonExplosion?.addEventListener("click", () => {
  stopAll();
  explosion.play();
});

buttonPerro?.addEventListener("click", () => {
  stopAll();
  perro.play();
});

buttonRisa?.addEventListener("click", () => {
  stopAll();
  risa.play();
});

buttonRamala?.addEventListener("click", () => {
  stopAll();
  ramala.play();
});

buttonNena?.addEventListener("click", () => {
  stopAll();
  nena.play();
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  const button = document.querySelector(`button.${key}`);
  button.classList.add("active");
});

document.addEventListener("keyup", function (e) {
  const key = e.key.toLowerCase();
  const button = document.querySelector(`button.${key}`);
  button.classList.remove("active");
});
