const header = document.querySelector("header");
const windowHeight = window.innerHeight;
const about = document.querySelector(".about");
const workTag = document.querySelector(".work__tag");
const nav = document.querySelectorAll(".menu > ul > li");
const work = document.querySelector(".work");
const contact = document.querySelector(".contact");

nav.forEach((na) => {
  na.addEventListener("click", () => {
    na.innerHTML === "about"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : na.innerHTML === "work"
      ? window.scrollTo({ top: work.offsetTop, behavior: "smooth" })
      : na.innerHTML === "contact"
      ? window.scrollTo({ top: contact.offsetTop, behavior: "smooth" })
      : null;
  });
});

let prevScroll = 0;
window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current < work.offsetTop || current === 0) {
    for (i = 0; i < nav.length; i++) {
      nav[i].style.opacity = 0.5;
    }
    nav[0].style.opacity = 1;
  } else if (current < contact.offsetTop) {
    for (i = 0; i < nav.length; i++) {
      nav[i].style.opacity = 0.5;
    }
    nav[1].style.opacity = 1;
  } else if (current >= contact.offsetTop) {
    for (i = 0; i < nav.length; i++) {
      nav[i].style.opacity = 0.5;
    }
    nav[2].style.opacity = 1;
    cards.classList.add("card__visible");
  }

  current === 0
    ? ((about.style.backgroundColor = "black"),
      workTag.classList.remove("showTag"))
    : ((about.style.backgroundColor = "#F2F2F2"),
      workTag.classList.add("showTag"));

  if (current > prevScroll) {
    header.classList.add("scroll__down");
    header.style.transition = "0.8s ease-in-out";
  } else if (current < prevScroll) {
    header.classList.remove("scroll__down");
  }
  prevScroll = current;
});
