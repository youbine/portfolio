const titles = document.querySelectorAll(".titlewrap");
const bg = document.querySelector(".work__detail");
const monitor = document.querySelector(".monitor");
const viewport = document.querySelector(".viewport");
const devices = document.querySelector(".devices");
const deviceSpans = document.querySelectorAll(".devices > span");
const pad = document.querySelector("#pad > svg");
const mobile = document.querySelector("#mobile > svg");
const padPath = pad.querySelectorAll("path");
const mobilePath = mobile.querySelectorAll("path");
const iphone = document.querySelector(".iphone");
const ipad = document.querySelector(".ipad");
const link = document.querySelector(".link");

deviceSpans.forEach((span) => {
  span.addEventListener("click", () => {
    if (span.id === "mobile") {
      iphone.classList.add("showDevices");
      ipad.classList.remove("showDevices");
      monitor.classList.remove("showDevices");

      const slide = document.querySelector(".iphone > .iphone__screen");
      let isDown = false;
      let startY;

      slide.addEventListener("mousedown", (event) => {
        isDown = true;
        startY = event.pageY - slide.offsetTop;
        scrollTop = slide.scrollTop;
      });
      slide.addEventListener("mouseleave", () => {
        isDown = false;
      });
      slide.addEventListener("mouseup", () => {
        isDown = false;
      });
      slide.addEventListener("mousemove", (event) => {
        if (!isDown) return;
        event.preventDefault();
        const y = event.pageY - slide.offsetTop;
        const walk = (y - startY) * 2.5;
        slide.scrollTop = scrollTop - walk;
      });
    } else if (span.id === "web") {
      iphone.classList.remove("showDevices");
      ipad.classList.remove("showDevices");
      monitor.classList.add("showDevices");
    } else if (span.id === "pad") {
      iphone.classList.remove("showDevices");
      ipad.classList.add("showDevices");
      monitor.classList.remove("showDevices");
      const slide = document.querySelector(".ipad > .iphone__screen");
      let isDown = false;
      let startY;

      slide.addEventListener("mousedown", (event) => {
        isDown = true;
        startY = event.pageY - slide.offsetTop;
        scrollTop = slide.scrollTop;
      });
      slide.addEventListener("mouseleave", () => {
        isDown = false;
      });
      slide.addEventListener("mouseup", () => {
        isDown = false;
      });
      slide.addEventListener("mousemove", (event) => {
        if (!isDown) return;
        event.preventDefault();
        const y = event.pageY - slide.offsetTop;
        const walk = (y - startY) * 2.5;
        slide.scrollTop = scrollTop - walk;
      });
    }
  });
});

titles.forEach((title) =>
  title.addEventListener("click", () => {
    const span = title.querySelectorAll("span");
    const skills = title.querySelector(".skills");

    if (span[1].innerHTML.includes("mobile", "pad")) {
      pad.style.display = "none";
      mobile.style.display = "none";
    } else {
      pad.style.display = "block";
      mobile.style.display = "block";
    }
    padPath[1].classList.toggle("pathLast");
    padPath[0].classList.toggle("pathFirst");
    mobilePath[1].classList.toggle("pathLast");
    mobilePath[0].classList.toggle("pathFirst");
    if (span[0].innerHTML === "hite") {
      viewport.style.backgroundImage =
        "url('Webpage-CloneCoding-Hitejinro.png')";
      link.href =
        "https://youbine.github.io/Webpage_CloneCoding/Hitejinro/index.html";
    } else if (span[0].innerHTML === "starbucks") {
      viewport.style.backgroundImage =
        "url('Webpage-CloneCoding-Starbucks.png')";
      link.href =
        "https://youbine.github.io/Webpage_CloneCoding/Starbucks/index.html";
    } else if (span[0].innerHTML === "netflix") {
      viewport.style.backgroundImage = "url('React-netflix.png')";
      link.href = "https://youbine.github.io/react_netflix/";
    } else if (span[0].innerHTML === "Almighty Taco") {
      viewport.style.backgroundImage = "url('Almighty-taco.png')";
      link.href = "https://youbine.github.io/almightyTaco/";
    }

    for (i = 0; i < titles.length; i++) {
      titles[i].classList.toggle("flip");
      title.classList.contains("clicked") && titles[i].classList.remove("flip");
    }
    devices.classList.toggle("showDevicesSpan");
    title.classList.toggle("clicked") && title.classList.remove("flip");
    skills.classList.toggle("skillsToggle");
    //show mobile
    if (
      monitor.classList.contains("showDevices") ||
      iphone.classList.contains("showDevices") ||
      ipad.classList.contains("showDevices")
    ) {
      monitor.classList.remove("showDevices");
      iphone.classList.remove("showDevices");
      ipad.classList.remove("showDevices");
      setTimeout(() => {
        bg.classList.toggle("showbg");
      }, 500);
    } else if (!monitor.classList.contains("showDevices")) {
      monitor.classList.toggle("showDevices");
      bg.classList.toggle("showbg");
    }
  })
);

const workWrap = document.querySelector(".workWrap");
const mouse = document.querySelector(".mouse");
const screen = document.querySelector(".screen");

workWrap.addEventListener("mouseenter", () => {
  mouse.style.opacity = 1;
  workWrap.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX - 20;
    let mouseY = event.clientY - 20;
    mouse.style.left = mouseX + "px";
    mouse.style.top = mouseY + "px";
    if (event.path[0].className === "viewport") {
      mouse.innerHTML = "Visit";
    } else if (event.path[0].className === "iphone__img") {
      mouse.innerHTML = "drag";
    } else {
      mouse.innerHTML = "";
    }
  });
});

workWrap.addEventListener("mouseleave", () => {
  mouse.style.opacity = 0;
});
