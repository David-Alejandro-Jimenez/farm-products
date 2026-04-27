export function initScrollReveal(selector) {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.animation = "fadeUp 0.7s forwards";
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    observer.observe(element);
  });
}
