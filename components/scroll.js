const scroller = document.querySelector(".scroller");

gsap.registerPlugin(ScrollTrigger);
Scrollbar.use(OverscrollPlugin);
let bodyScrollBar = Scrollbar.init(scroller, {
  damping: 0.1,
});

//nav
const nav = document.querySelector("nav");
bodyScrollBar.addListener(({ offset }) => {
  nav.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0px)`;
});
bodyScrollBar.containerEl.querySelectorAll("a[href*='#']").forEach((el) => {
  el.addEventListener("click", () => {
    bodyScrollBar.scrollIntoView(
      document.getElementById(el.getAttribute("href").substring(1)),
      { offsetTop: -bodyScrollBar.containerEl.scrollTop }
    );
  });
});

ScrollTrigger.scrollerProxy(scroller, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  },
});

bodyScrollBar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: scroller });

gsap.to(".work__detail", {
  scrollTrigger: {
    trigger: ".work",
    end: "bottom center",
    scrub: 1,
  },
  opacity: 1,
  y: 0,
});

gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

const images = gsap.utils.toArray(".panel:not(.room)");


images.forEach((image, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
      scroller: ".scroller",
      start: () => "top -" + window.innerHeight * (i + 0.5),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
    },
  });

  tl.to(image, { height: 0 });
});

gsap.set(".titlewrap", { zIndex: (i, target, targets) => targets.length - i });

const titles = gsap.utils.toArray(".title > div");

titles.forEach((title, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
      scroller: ".scroller",
      start: () => "top -" + window.innerHeight * i,
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
      stagger: 0.3,
    },
  });

  tl.to(title, { duration: 0.5, y: "0" }).to(
    title,
    { duration: 0.5, y: i === 5 ? 0 : "-100%" },
    0.66
  );
});

const spans = gsap.utils.toArray(".small");

spans.forEach((span, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
      scroller: ".scroller",
      start: () => "top -" + window.innerHeight * i,
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
      stagger: 0.3,
    },
  });

  tl.to(span, { duration: 0.5, opacity: 0.3 }).to(
    span,
    { duration: 0.5, opacity: i === 5 ? 0.3 : 0 },
    0.66
  );
});

const ps = gsap.utils.toArray(".titlewrap > p");

ps.forEach((p, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
      scroller: ".scroller",
      start: () => "top -" + window.innerHeight * i,
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
      stagger: 0.3,
    },
  });

  tl.to(p, { duration: 0.5, x: 0, opacity: 1 }).to(
    p,
    { duration: 0.5, x: i === 5 ? 0 : "-100%", opacity: i === 5 ? 1 : 0 },
    0.66
  );
});

const skills = gsap.utils.toArray(".skills");

skills.forEach((skill, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
      scroller: ".scroller",
      start: () => "top -" + window.innerHeight * i,
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
    },
  });

  tl.to(skill, { duration: 0.5, x: 0, opacity: 1 }).to(
    skill,
    { duration: 0.5, x: i === 5 ? 0 : "-100%", opacity: i === 5 ? 1 : 0 },
    0.66
  );
});

ScrollTrigger.create({
  trigger: ".work",
  scroller: ".scroller",
  y: 0,
  scrub: true,
  // markers: true,
  pin: true,
  start: () => "top top",
  end: () => "+=" + (images.length + 1) * window.innerHeight,
  invalidateOnRefresh: true,
});

const menus = document.querySelectorAll(".menu > ul > li > a");

gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "-10% top",
    end:
      i === 1
        ? () => "+=" + (images.length + 1) * window.innerHeight
        : () => "+=" + window.innerHeight,
    scrub: true,
    toggleClass: {
      targets: menus[i],
      className: "active",
    },
  });
});

gsap.to(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top",
    end: "10%",
    scrub: true,
  },
  backgroundColor: "#F2F2F2",
});

gsap.to(".home > a", {
  scrollTrigger: {
    trigger: ".about",
    start: "top",
    end: "10%",
    scrub: true,
  },
  color: "black",
  fontWeight: "bold",
});
gsap.to(".about > svg > text", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".about > svg > text",
    start: "top center",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".work > svg > text", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".work > svg > text",
    end: "bottom center",
    scrub: 1,
  },
});
gsap.to(".contact > svg > text", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".contact > svg > text",
    end: "bottom center",
    scrub: 1,
  },
});
