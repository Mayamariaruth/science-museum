// Hero section scroll functionality
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".hero-scroll-container");
  const sections = document.querySelectorAll(".hero-container");
  const totalSections = sections.length;

  let currentSectionIndex = 0;

  function scrollToSection(index) {
    const offset = index * -100;
    scrollContainer.style.transform = `translateX(${offset}%)`;
  }

  document.getElementById("scroll-left").addEventListener("click", () => {
    currentSectionIndex =
      (currentSectionIndex - 1 + totalSections) % totalSections;
    scrollToSection(currentSectionIndex);
  });

  document.getElementById("scroll-right").addEventListener("click", () => {
    currentSectionIndex = (currentSectionIndex + 1) % totalSections;
    scrollToSection(currentSectionIndex);
  });

  // Autoscroll functionality
  // setInterval(() => {
  // currentSectionIndex = (currentSectionIndex + 1) % totalSections;
  // scrollToSection(currentSectionIndex);
  // }, 7000);
});
