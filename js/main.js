// Nav scroll Event
window.addEventListener("scroll", (eo) => {
  const header = document.querySelector("header");
  if (window.scrollY >= header.offsetHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
// Toggle FAQS
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", (eo) => {
    faq.classList.toggle("open");
    if (faq.classList.contains("open")) {
      const icon = faq.getElementsByClassName("uil")[0];
      icon.classList.remove("uil-plus");
      icon.classList.add("uil-minus");
    } else {
      const icon = faq.getElementsByClassName("uil")[0];
      icon.classList.add("uil-plus");
      icon.classList.remove("uil-minus");
    }
  });
});
// Toggle Menu
const openMenu = document.getElementById("open-menu-btn");
const closeMenu = document.getElementById("close-menu-btn");

openMenu.addEventListener("click", (eo) => {
  const menu = document.getElementById("menu");
  menu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", (eo) => {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
// Counting Achievements
const courses = document.getElementById("count-courses");
const students = document.getElementById("count-students");
const awards = document.getElementById("count-awards");
let countC = 0;
let countS = 0;
let countA = 0;
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
const countAchievements = () => {
  setInterval(() => {
    if (countC < 450) {
      countC++;
      courses.innerHTML = `${countC}+`;
      students.innerHTML = `${Math.trunc(scale(countC, 0, 450, 0, 7900))}+`;
      awards.innerHTML = `${Math.trunc(scale(countC, 0, 450, 0, 26))}+`;
    } else {
      clearInterval(stop);
    }
  }, 0);
};
countAchievements();
