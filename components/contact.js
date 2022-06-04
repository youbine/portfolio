const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "-10%",
    // markers: true,
  },
});

tl.from(".contact__skills, .contact__email", {
  scrollTrigger: {
    trigger: ".contact",
    end: "bottom center",
    scrub: 1,
  },
  y: "-100%",
});

tl.from(".skills__list > li", {
  backgroundSize: "100% 0%",
  ease: Circ.easeInOut,
  duration: 1,
}).from(".contact__email > h2 > strong", {
  backgroundSize: "100% 0%",
  ease: Circ.easeInOut,
  duration: 1,
});
