

  AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
  });

/* GSAP Animations */
gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-text", {
  y: 40,
  opacity: 0,
  delay: 0.2,
  duration: 1
});

gsap.from(".hero-btns", {
  y: 30,
  opacity: 0,
  delay: 0.4,
  duration: 1
});



gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});



const scrollBtn = document.getElementById("scroll-top");
const heroSection = document.querySelector(".hero");

/* Show button after hero section */
window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetHeight;

  if (window.scrollY > heroBottom) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

/* Scroll to top on click */
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
