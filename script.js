const audios = {
  cristales: new Audio("https://www.fesliyanstudios.com/play-mp3/5659"),
  explosion: new Audio("https://www.fesliyanstudios.com/play-mp3/561"),
  perro: new Audio("dog-bark.mp3"),
  risa: new Audio("laughter3.mp3"),
  ramala: new Audio("ramala.mp3"),
  nena: new Audio("nena.mp3"),
  amores: new Audio("amores.mp3"),
};

const stopOthers = (current) => {
  Object.values(audios).forEach((audio) => {
    if (audio !== current) audio.pause();
  });
};

Object.keys(audios).forEach((key) => {
  document.querySelector(`#${key}`)?.addEventListener("click", () => {
    const audio = audios[key];
    audio.paused ? (stopOthers(audio), audio.play()) : audio.pause();
  });
});
