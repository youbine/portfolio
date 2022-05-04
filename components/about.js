const greeting = document.querySelectorAll(".greeting > span");
const texts = document.querySelectorAll(".text > p");

texts.forEach((text, i) => {
  setTimeout(function () {
    ((text.style.opacity = 1),
    (text.style.animation =
      "fadeIn 1s cubic-bezier(0.39, 0.575, 0.565, 1) both")),
      (text.style.animationDelay = `${0.2 * i}s`);
  }, 1000);
});

const tl = new TimelineLite({
  onComplete: function () {
    tl.restart();
  },
});

TweenLite.defaultEase = Circ.easeInOut;
const time = 0.9;
const y = 50;
tl.add(
  TweenMax.staggerFromTo(
    greeting,
    time,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
    },
    2
  )
).add(
  TweenMax.staggerTo(
    greeting,
    time,
    {
      delay: time,
      opacity: 0,
      y: -y,
    },
    2
  ),
  1.3
);

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
  if (thingsILove.length) setTimeout(typingLove, 2250);
  if (thingsIam.length) setTimeout(typingIam, 2250);
});
