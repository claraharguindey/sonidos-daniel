const explosion = new Audio("https://www.fesliyanstudios.com/play-mp3/561");
const cristales = new Audio("https://www.fesliyanstudios.com/play-mp3/5659");

const buttonCristales = document.querySelector("#cristales");
const buttonExplosion = document.querySelector("#explosion");

buttonCristales?.addEventListener("click", () => {
  cristales.play();
});

buttonExplosion?.addEventListener("click", () => {
  explosion.play();
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
