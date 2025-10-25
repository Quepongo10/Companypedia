// Esperar a que el DOM esté listo
// document.addEventListener('DOMContentLoaded', function() {
  // Registrar plugin ScrollTrigger
//   if (gsap && gsap.registerPlugin) {
//     try { gsap.registerPlugin(ScrollTrigger); } catch(e) { /* ya registrado o no disponible */ }
//   }

  let tl = gsap.timeline();
  let x = 1;

  // Animación de apertura del telón y desaparición del loading screen
  tl.to("#telon", { duration: 1*x, height: "50%", ease: "power2.inOut", delay: 1.75 })
    .to("#telon", { duration: 1*x, height: "0.25%", ease: "power2.inOut", delay: 0.25*x })
    .to("#suelo", { duration: 1*x, opacity: 0, ease: "power2.inOut", delay: 0 })
    .to("#telon", { duration: 0.5*x, top: "0%", ease: "power2.inOut" }, "-=0.75")
    .to("#suelo", { duration: 0.5*x, top: "100%", ease: "power2.inOut" }, "-=0.75")
    .to("#titulo_load", { duration: 0.25*x, opacity: 0 } , "-=1.75")
    .to("#loading-screen", { duration: 0.5*x, opacity: 0, display: "none", ease: "power2.inOut" }, "-=0.5");

  // Animación parpadeante del título principal
  gsap.to("#titulo_ani", {
      opacity: 0,
      repeat: -1,
      ease: "steps(1)",
      duration: 0.55,
      yoyo: true
  });

  // Timeline controlado por scroll usando ScrollTrigger
//   let tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#creatures", 
//       start: "top 30%",
//       end: "15% 50%",
//       scrub: 1,

//     }
//   });

//   tl2.from(".desap", {rotation: 360, transformOrigin: "50% 50%", stagger: 0.05})

// });
