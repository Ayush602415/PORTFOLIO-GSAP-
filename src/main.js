import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();

tl.from(".navbar", {
    y: -30,
    opacity: 0,
    duration: 0.6
})
.from(".navbar img", {
    y: 80,
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

.from(".hero-left .small-text", {
    y: 30,
    opacity: 0,
    duration: 0.4
})

.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
}, "-=0.2")

.from(".hero-description", {
    y: 30,
    opacity: 0,
    duration: 0.5
})

.from(".hero-buttons", {
    y: 25,
    opacity: 0,
    duration: 0.5
})

.from(".social-links a", {
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1
})

.from(".code-box", {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});



gsap.from("#about .section-heading", {
    y: 60,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        once: true
    }
});




gsap.from("#skills .skill", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,

    scrollTrigger: {
        trigger: "#skills",
        start: "top 75%",
        once: true
    }
});



gsap.from("#projects .project", {
    y: 70,
    opacity: 0,
    duration: 0.8,
    stagger: 0.25,
    ease: "power2.out",

    scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        once: true
    }
});




gsap.to("#projects .section-heading h2", {
    x: 80,

    scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});




gsap.from(".timeline-item", {
    x: -50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,

    scrollTrigger: {
        trigger: ".experience",
        start: "top 75%",
        once: true
    }
});



gsap.from("#contact .section-heading", {
    y: 50,
    opacity: 0,
    duration: 0.7,

    scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        once: true
    }
});

gsap.from(".contact-links a", {
    x: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,

    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        once: true
    }
});