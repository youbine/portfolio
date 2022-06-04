const greeting = document.querySelectorAll(".greeting > span");
const texts = document.querySelectorAll(".text > p");
const introAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
    },
  });

  tl.to(".intro__title > p", {
    duration: 2,
    y: 0,
    ease: "power4",
  })
    .to(
      ".intro__title > p",
      {
        duration: 1,
        y: "-100%",
        ease: "power4",
      },
      "-=0.5"
    )
    .to(
      ".intro",
      {
        y: "-100%",
        ease: Expo.easeInOut,
      },
      "-=0.3"
    )
    .from(".about > svg", {
      opacity: 0,
      duration: 1,
    });
  return tl;
};

const skewInElements = (elements) => {
  const tl = gsap.timeline();
  tl.from(elements, {
    duration: 1,
    ease: "power4",
    skewY: -5,
    autoAlpha: 0,
    y: 40,
  });

  return tl;
};

const fromYElements = (elements) => {
  const tl = gsap.timeline();
  tl.from(elements, {
    y: "100%",
    duration: 1.5,
    ease: "power4",
  });
  return tl;
};
const overflowEl = (el) => {
  const tl = gsap.timeline();
  tl.to(el, {
    overflow: "visible",
  });
  return tl;
};
const svgWork = (el) => {
  const tl = gsap.timeline();
  tl.to(el, {
    display: "block",
  });
  return tl;
};

const master = gsap.timeline({
  paused: false,
  delay: 0.2,
});

master
  .add(introAnimation())
  .add(fromYElements(".im, .name__text"))
  .add(overflowEl(".name"), "-=1")
  .add(svgWork(".name__text > svg"), "-=1")
  .add(fromYElements(".develop > div:first-child > p"), "-=1.5")
  .add(fromYElements(".develop > div:nth-child(2) > p"), "-=1.3")
  .add(fromYElements(".develop> h1"), "-=1")
  .add(skewInElements(".today, .love__wrap, .iam__wrap, .home, .menu"), "+=0");
const clock = document.querySelector(".clock");
const weeks = document.querySelector(".weeks");
const doing = document.querySelector(".doing");
const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function currentTime() {
  const now = new Date();
  const NowWeek = WEEK_DAYS[now.getDay()];
  const nowUTC = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const hoursGap = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(nowUTC + hoursGap);
  let hours = koreaTime.getHours();
  let minutes = koreaTime.getMinutes();
  let ampm = "";

  //doing contents
  if (hours >= 9) {
    doing.textContent = "i'm working now";
  } else if (hours >= 19) {
    doing.textContent = "i'm chilling now";
  } else if (hours <= 23) {
    doing.textContent = "i'm sleeping now";
  }

  if (hours > 12) {
    hours -= 12;
    ampm = "pm";
  } else if (hours === 0) {
    hours = 12;
    ampm = "am";
  } else {
    ampm = "am";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  weeks.innerText = NowWeek;
  clock.innerText = `${hours}:${minutes}${ampm}`;
}
currentTime();

const loveSpan = document.querySelector(".typing__love");
const cursor = document.querySelector(".love__wrap > .cursor");
const thingsILove = [
  "reading books",
  "simple",
  "coffee",
  "learning new things",
  "chocolate",
];
let index = 0;
let charCount = 0;

function typingLove() {
  if (charCount < thingsILove[index].length) {
    !cursor.classList.contains("typing") && cursor.classList.add("typing");

    loveSpan.textContent += thingsILove[index].charAt(charCount);
    charCount++;
    setTimeout(typingLove, 200);
  } else {
    cursor.classList.remove("typing");
    setTimeout(typingBackLove, 2000);
  }
}

function typingBackLove() {
  if (charCount > 0) {
    !cursor.classList.contains("typing") && cursor.classList.add("typing");
    loveSpan.textContent = thingsILove[index].substring(0, charCount - 1);
    charCount--;
    setTimeout(typingBackLove, 100);
  } else {
    cursor.classList.remove("typing");
    index++;
    index >= thingsILove.length && (index = 0);
    setTimeout(typingLove, 1200);
  }
}

const iamSpan = document.querySelector(".typing__iam");
const cursorIam = document.querySelector(".iam__wrap > .cursor");
const thingsIam = [
  "a responsible person",
  "eager to learn",
  "Focused",
  "a good listener",
  "intj",
];
let indexIam = 0;
let charCountIam = 0;

function typingIam() {
  if (charCountIam < thingsIam[indexIam].length) {
    !cursorIam.classList.contains("typing") &&
      cursorIam.classList.add("typing");
    iamSpan.textContent += thingsIam[indexIam].charAt(charCountIam);
    charCountIam++;
    setTimeout(typingIam, 200);
  } else {
    cursorIam.classList.remove("typing");
    setTimeout(typingBackIam, 2000);
  }
}

function typingBackIam() {
  if (charCountIam > 0) {
    !cursorIam.classList.contains("typing") &&
      cursorIam.classList.add("typing");
    iamSpan.textContent = thingsIam[indexIam].substring(0, charCountIam - 1);
    charCountIam--;
    setTimeout(typingBackIam, 100);
  } else {
    cursorIam.classList.remove("typing");
    indexIam++;
    indexIam >= thingsIam.length && (indexIam = 0);
    setTimeout(typingIam, 1200);
  }
}

window.addEventListener("load", function () {
  if (thingsILove.length) setTimeout(typingLove, 8000);
  if (thingsIam.length) setTimeout(typingIam, 8000);
});
