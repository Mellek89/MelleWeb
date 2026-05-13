document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', () => {
    const lang = el.dataset.lang;

    // aktive Klasse setzen
    document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
    el.classList.add('active');

    // aktuelle Datei holen
    let file = window.location.pathname.split("/").pop();
    if (!file) file = "index.html";

    // 👉 Weiterleitung (einfach & robust)
    window.location.href = `/${lang}/${file}`;
  });
});
const tl = gsap.timeline();

// Initial States
gsap.set(".svgLogoIntro", {
  opacity: 0,
  scale: 0.9
});

gsap.set(".brace-left", {
  x: -120,
  opacity: 0,
  rotate: -8
});

gsap.set(".brace-right", {
  x: 120,
  opacity: 0,
  rotate: 8
});

gsap.set(".m-red", {
  scale: 0,
  opacity: 0,
  transformOrigin: "50% 50%"
});

gsap.set(".logo-text", {
  y: 10,
  opacity: 0,
  filter: "blur(8px)"
});


// TIMELINE
tl

// "Web it!" erscheint
.from(".webit",  {
  opacity: 0,
  y: 20,
  duration: 1
})


// "it!" verschwindet
.to(".it", {
  opacity: 0,
  x: 40,
  duration: 0.7,
  ease: "power2.out"
})

// "Web" nach links
.to(".web", {
  x: -60,
  duration: 1,
  ease: "power3.inOut"
}, "-=0.3")

// Logo erscheint
.to(".svgLogoIntro ,.with", {
  opacity: 1,
  scale: 1,
  duration: 1
}, "-=0.6")



// Klammern rein
.to(".brace-left", {
  x: 0,
  opacity: 1,
  rotate: 0,
  duration: 1.2,
  ease: "expo.out"
})

.to(".brace-right", {
  x: 0,
  opacity: 1,
  rotate: 0,
  duration: 1.2,
  ease: "expo.out"
}, "<")

// M erscheint
.to(".m-red", {
  scale: 1,
  opacity: 1,
  duration: 1,
  ease: "elastic.out(1,0.5)"
}, "-=0.4")

// Text smooth rein
.to(".logo-text", {
  y: 0,
  opacity: 1,
  filter: "blur(0px)",
  duration: 1,
  stagger: 0.08,
  ease: "power3.out"
}, "-=0.5")

// leichter cinematic zoom
/*.to(".svgLogoIntro", {
  scale: 1.03,
  duration: 0.6,
  ease: "power2.out"
})*/

.to(".svgLogoIntro", {
  scale: 1,
  duration: 1,
  ease: "elastic.out(1,0.4)"
})

// kurze Pause
.to({}, {
  duration: 0.5
})

// Intro ausblenden
.to("#intro", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut"
})

// entfernen
.set("#intro", {
  display: "none"
})

// Content einblenden
.fromTo("#content",
  {
    opacity: 0,
    y: 30
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
  }
);