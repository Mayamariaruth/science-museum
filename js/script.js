// Hero section scroll functionality
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".hero-scroll-container");
  const sections = document.querySelectorAll(".hero-container");
  const dots = document.querySelectorAll(".hero-pagination i"); // Selecting the dots
  const totalSections = sections.length;

  let currentSectionIndex = 0;

  // Scroll to section based on index
  function scrollToSection(index) {
    const offset = index * -100;
    scrollContainer.style.transform = `translateX(${offset}%)`;
    updatePagination(index); // Update dots when section changes
  }

  // Update the active dot based on index
  function updatePagination(activeIndex) {
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Scroll left button
  document.getElementById("scroll-left").addEventListener("click", () => {
    currentSectionIndex =
      (currentSectionIndex - 1 + totalSections) % totalSections;
    scrollToSection(currentSectionIndex);
  });

  // Scroll right button
  document.getElementById("scroll-right").addEventListener("click", () => {
    currentSectionIndex = (currentSectionIndex + 1) % totalSections;
    scrollToSection(currentSectionIndex);
  });

  updatePagination(currentSectionIndex);

  // Click the dots to jump to sections
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSectionIndex = index;
      scrollToSection(currentSectionIndex);
    });
  });

  // Autoscroll functionality
  setInterval(() => {
    currentSectionIndex = (currentSectionIndex + 1) % totalSections;
    scrollToSection(currentSectionIndex);
  }, 6000);
});
