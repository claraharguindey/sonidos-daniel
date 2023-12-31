const explosion = new Audio("https://www.fesliyanstudios.com/play-mp3/561");
const cristales = new Audio("https://www.fesliyanstudios.com/play-mp3/5659");
const perro = new Audio(
  "https://soundbible.com/mp3/labrador-barking-daniel_simon.mp3"
);
const risa = new Audio(
  "https://soundbible.com/mp3/Crowd%20Laughing-SoundBible.com-156484001.mp3"
);

const buttonCristales = document.querySelector("#cristales");
const buttonExplosion = document.querySelector("#explosion");
const buttonPerro = document.querySelector("#perro");
const buttonRisa = document.querySelector("#risa");
const stopAll = () => {
  cristales.pause();
  explosion.pause();
  perro.pause();
  risa.pause();
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
