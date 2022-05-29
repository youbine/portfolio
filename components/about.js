const greeting = document.querySelectorAll(".greeting > span");
const texts = document.querySelectorAll(".text > p");

const animationOptions = {
  ease: "expo.inOut",
};

const introAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: animationOptions.ease,
      duration: 1,
    },
  });

  tl.to(".intro__title", {
    duration: 1.5,
    y: 0,
    autoAlpha: 1,
    delay: 0.5,
  })
    .to(".intro__background__left, .intro__background__right", {
      scaleX: 1,
    })
    .to(".intro__background__left, .intro__background__right", {
      scaleY: 0,
      transformOrigin: "top center",
    })
    .to(
      ".intro__title",
      {
        duration: 1.5,
        y: -60,
        autoAlpha: 0,
      },
      "-=0.6"
    )
    .to(
      ".intro",
      {
        y: "-100%",
      },
      "-=0.5"
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
    ease: animationOptions.ease,
    skewY: -5,
    autoAlpha: 0,
    y: 40,
  });

  return tl;
};

const fadeInElements = (elements) => {
  const tl = gsap.timeline();

  tl.from(elements, {
    duration: 1,
    ease: animationOptions.ease,
    y: "20px",
  });

  return tl;
};

const master = gsap.timeline({
  paused: false,
  delay: 0.2,
});

const tlgreeting = new TimelineLite({
  onComplete: function () {
    tlgreeting.restart();
  },
});
tlgreeting.delay(6);
TweenLite.defaultEase = Circ.easeInOut;
const time = 1;
const y = 50;
tlgreeting
  .add(
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
  )
  .add(
    TweenMax.staggerTo(
      greeting,
      time,
      {
        delay: time,
        autoAlpha: 0,
        y: -y,
      },
      2
    ),
    1.3
  );

master
  .add(introAnimation())
  .add(fadeInElements(".greeting"))
  .add(
    skewInElements(".today, .love__wrap, .iam__wrap, .home, .menu"),
    "+=0.5"
  );

texts.forEach((text, i) => {
  setTimeout(function () {
    ((text.style.opacity = 1),
    (text.style.animation =
      "fadeIn 1s cubic-bezier(0.39, 0.575, 0.565, 1) both")),
      (text.style.animationDelay = `${0.2 * i}s`);
  }, 6500);
});

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
