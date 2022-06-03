const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "-10%",
    // markers: true,
  },
});
tl.from(".contact__skills > p", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4",
})
  .from(".skills__list > li", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power4",
    stagger: 0.5,
  })
  .from(".skills__list > li", {
    backgroundSize: "100% 0%",
    ease: Circ.easeInOut,
    duration: 1,
  })
  .from(".contact__email > h2", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power4",
  })
  .from(".contact__email > h2 > strong", {
    backgroundSize: "100% 0%",
    ease: Circ.easeInOut,
    duration: 1,
  })
  .from(".email, .gmail", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power4",
  });
