const rotateCard = document.querySelector(".card__inner");
const cards = document.querySelector(".card");
const animationCard = document.querySelector(".card__wrap");

rotateCard.addEventListener("click", () => {
  rotateCard.classList.toggle("rotated");
});

cards.addEventListener("mousemove", (event) => {
  let xAxis = (cards.offsetWidth / 2 - event.offsetX) / 20;
  let yAxis = (cards.offsetHeight / 2 - event.offsetY) / 20;

  animationCard.style.transform = `rotateY(${
    xAxis * -1
  }deg) rotateX(${yAxis}deg)`;
  animationCard.style.transition = "0.2s";
});

cards.addEventListener("mouseleave", () => {
  animationCard.style.transform = "rotateY(0deg) rotateX(0deg)";
  animationCard.style.transition = "1s ease";
});
