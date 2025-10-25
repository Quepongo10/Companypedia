
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