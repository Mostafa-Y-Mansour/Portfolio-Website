let button = document.getElementById("btn");
let hero = document.getElementById("hero");
let heroStyle = getComputedStyle(hero);

button.onclick = () => {
  if (heroStyle.backgroundColor === "rgb(239, 244, 253)") {
    button.style.backgroundColor = "#eed";
    button.style.color = "black";
    button.innerHTML = "Light";
    hero.style.backgroundColor = "rgb(33, 33, 33)";
    document.documentElement.style.setProperty("--main-color", "#eed");
    document.documentElement.style.setProperty("--btn-color", "#212121");
    console.log("light mode");
  } else {
    button.style.backgroundColor = "#212121";
    button.style.color = "white";
    button.innerHTML = "Dark";
    hero.style.backgroundColor = "rgb(239, 244, 253)";
    document.documentElement.style.setProperty("--main-color", "#212121");
    document.documentElement.style.setProperty("--btn-color", "#eed");
    console.log("Dark mode");
  }
};
