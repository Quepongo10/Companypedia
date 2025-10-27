// Esperar a que el DOM esté listo
// document.addEventListener('DOMContentLoaded', function() {
  // Registrar plugin ScrollTrigger
//   if (gsap && gsap.registerPlugin) {
//     try { gsap.registerPlugin(ScrollTrigger); } catch(e) { /* ya registrado o no disponible */ }
//   }

gsap.to("#titulo_ani", {
    opacity: 0,
    repeat: -1,
    ease: "steps(1)",
    duration: 0.55,
    yoyo: true
});

let scrambletl = gsap.timeline();
let x = 1;
gsap.registerPlugin(ScrambleTextPlugin);

scrambletl.to(".scramble-text1", {
    duration: 3,
    scrambleText: {
        text: "En nombre de la compañía se te ha facilitado este archivo que contiene regístros de las criaturas encontradas en las lunas cercanas. Recuerda utilizar esta información para garantizar tu supervivencia y la de tu equipo.",
        chars: "upperCase",
        revealDelay: 0.5,
        speed: 0.3
    },
    ease: "power2.inOut"
})
    .to(".scramble-text2", {
        duration: 3,
        scrambleText: {
            text: "La procedencia de estos recursos no es exacta y puede contener algún tipo de error. La compañía no se hace responsable de posibles accidentes ocasionados por la falta de la información precisa.",
            chars: "lowerCase",
            revealDelay: 0.5,
            speed: 0.3
        },
        ease: "power2.inOut"
    });
  let tl = gsap.timeline();

  // Animación de apertura del telón y desaparición del loading screen
  tl.to("#telon", { duration: 1*x, height: "50%", ease: "power2.inOut", delay: 1.75 })
    .to("#telon", { duration: 1*x, height: "0.25%", ease: "power2.inOut", delay: 0.25*x })
    .to("#suelo", { duration: 1*x, opacity: 0, ease: "power2.inOut", delay: 0 })
    .to("#telon", { duration: 0.5*x, top: "0%", ease: "power2.inOut" }, "-=0.75")
    .to("#suelo", { duration: 0.5*x, top: "100%", ease: "power2.inOut" }, "-=0.75")
    .to("#titulo_load", { duration: 0.25*x, opacity: 0 } , "-=1.75")
    .to("#loading-screen", { duration: 0.5*x, opacity: 0, display: "none", ease: "power2.inOut" }, "-=0.5");

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
