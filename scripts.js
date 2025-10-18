let tl = gsap.timeline();

// Animación de apertura del telón y desaparición del loading screen
tl.to("#telon", { duration: 2, height: "50%", ease: "power2.inOut", delay: 1.5 })
  .to("#telon", { duration: 2, height: "0.25%", ease: "power2.inOut", delay: 0.5 })
  .to("#suelo", { duration: 2, opacity: 0, ease: "power2.inOut", delay: 0 })
  .to("#telon", { duration: 1, top: "0%", ease: "power2.inOut" }, "-=1.5")
  .to("#suelo", { duration: 1, top: "100%", ease: "power2.inOut" }, "-=1.5")
  .to("#titulo_load", { duration: 0.5, opacity: 0 } , "-=3.5")
  .to("#loading-screen", { duration: 1, opacity: 0, display: "none", ease: "power2.inOut" }, "-=1");

// Animación parpadeante del título principal
gsap.to("#titulo_ani", {
    opacity: 0,
    repeat: -1,
    ease: "steps(1)",
    duration: 0.55,
    yoyo: true
});
