const button = document.getElementById("btn");
const hero = document.getElementById("hero");
let heroStyle = getComputedStyle(hero);

button.onclick = () => {
  if (heroStyle.backgroundColor === "rgb(239, 244, 253)") {
    // dark mode
    button.style.backgroundColor = "#eed";
    button.style.color = "black";
    button.innerHTML = "Light";
    document.documentElement.style.setProperty("--mode", "rgb(33, 33, 33)");
    document.documentElement.style.setProperty("--main-color", "#eed");
    document.documentElement.style.setProperty("--btn-color", "#212121");
  } else {
    // light mode
    button.style.backgroundColor = "#212121";
    button.style.color = "white";
    button.innerHTML = "Dark";
    document.documentElement.style.setProperty("--mode", "rgb(239, 244, 253)");
    document.documentElement.style.setProperty("--main-color", "#212121");
    document.documentElement.style.setProperty("--btn-color", "#eed");
  }
};

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.onclick = () => {
  // toggle the navigation menu
  navLinks.classList.toggle("nav-active");

  // toggle the navigation button
  burger.classList.toggle("burger-toggle");
};
