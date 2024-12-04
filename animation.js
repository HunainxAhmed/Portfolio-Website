import gsap from "gsap";
import { ScrollTrigger } from "node_modules/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// ANIMATING USING GSAP
function firstpageanime() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      opacity: 0,
      y: "-10",
      duration: 1,
      color: "#00a6ffa4",
      ease: "expo.inOut", // Corrected ease
    });
    tl.from("#hero-footer", {
      opacity: 0,
      color: "#00a6ffa4",
      y: "-10",
      duration: 1.5,
      delay: "-1",
      ease: "expo.inOut", // Corrected ease
    });
    tl.from("#hero-heading", {
      opacity: 0,
      x: "-10",
      delay: "-1",
      ease: "expo.inOut", // Corrected ease
    });

    tl.add(gsap.timeline({ repeat: 10, repeatDelay: 0 })
    .to("#development", { color: 'white', duration: 0.1 })
    .to("#development", { color: '#00a6ff', duration: 0.1 }), "-=1"); // Adjust overlap as needed
    
    tl.add(gsap.timeline({ repeat: -1, repeatDelay: 0 })
    .to(".blink", { color: 'white', duration: 2 })
    .to(".blink", { color: '#00a6ff', duration: 2 }) // Adjust overlap as needed
    .to(".blink", { color: 'white', duration: 2 })) 
}
firstpageanime();


// MAIN SLIDER ANIMATION
gsap.from("#sliding-text", {
  opacity: 0, // Start with opacity 0
  scrollTrigger: {
    trigger: "#main-slider",
    start: "top 30%", // Animation starts when the top of #main-slider reaches 30% from the viewport
    end: "center", 
    scrub: true, // Smooth transition linked to scroll
  },
});

gsap.to("#sliding-text", {
  x: "-240%",
  scrollTrigger: {
    trigger: "#main-slider",
    scroller: "body",
    // markers: true, // Use for debugging
    start: "top 0%",
    end: "top -150%", // Extend the scroll duration
    scrub: 1, // Increase scrub value for a smoother effect
    pin: true,
  },
});
