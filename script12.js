// AOS
AOS.init({
  duration: 1000,
  once: true,
});

// GSAP Hero Animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.2
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 200;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
