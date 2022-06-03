const mouse = document.querySelector(".mouse");
const detail = document.querySelector(".work__detail");

detail.addEventListener("mouseenter", () => {
  mouse.style.width = "3rem";
  mouse.style.height = "3rem";
  mouse.style.opacity = 1;
  detail.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX - 20;
    let mouseY = event.clientY - 20;
    mouse.style.left = mouseX + "px";
    mouse.style.top = mouseY + "px";
    if (event.path[0].className.includes("panel")) {
      mouse.innerHTML = "Visit";
    } else {
      mouse.innerHTML = "";
    }

    // else if (event.path[0].className === "iphone__img") {
    //   mouse.innerHTML = "drag";
    // }
  });
});

detail.addEventListener("mouseleave", () => {
  mouse.style.width = "0rem";
  mouse.style.height = "0rem";
  mouse.style.opacity = 0;
});