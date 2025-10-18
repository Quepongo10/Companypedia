let tl = gsap.timeline();

tl.to("#telon", { duration: 2, height: "50%", ease: "power2.inOut", delay: 2 })
  .to("#telon", { duration: 2, height: "0.25%", ease: "power2.inOut", delay: 0.5 })
  .to("#suelo", { duration: 2, opacity: 0, ease: "power2.inOut", delay: 0 })
  .to("#telon", { duration: 1, top: "0%", ease: "power2.inOut" }, "-=1.5")
  .to("#suelo", { duration: 1, top: "100%", ease: "power2.inOut" }, "-=1.5")
  .to("#titulo_load", { duration: 0.5, opacity: 0 } , "-=3.5")
  .to("#loading-screen", { duration: 1, opacity: 0, display: "none", ease: "power2.inOut" }, "-=1");
