import "../css/style.css";
import { Menu } from "./cabbage";
import { DOMSelectors } from "./dom";

//cards
function addcards(arr) {
  arr.forEach((ugh) => {
    DOMSelectors.container.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="card">
    <h4 class="food-name"> ${ugh.name}</h4>
   <img src="${ugh.img}" alt="" class="card-img">
    <h5 class="price"> ${ugh.price}</h5>
  </div>
    `
    );
  });
}
addcards(Menu);
console.log(Menu);

function removeCards() {
  DOMSelectors.container.innerHTML = "";
}
console.log(DOMSelectors.container);

//theme button
document.getElementById("Theme").addEventListener("click", function (event) {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  }
});

//buttons
let btns = DOMSelectors.buttons;

const newArrs = {
  people: Menu.filter((food) => food.type.includes("people")).map(
    (food) => food
  ),
  sweets: Menu.filter((food) => food.type.includes("sweets")).map(
    (food) => food
  ),
  celebrity: Menu.filter((food) => food.type.includes("celebrity")).map(
    (food) => food
  ),
  nature: Menu.filter((food) => food.type.includes("nature")).map(
    (food) => food
  ),
  home: Menu.filter((food) => food.type.includes("home")).map((food) => food),
};
console.log(newArrs);

/*
//buttons 
let buttons = document.querySelectorAll("#people, #sweets, #celebrity, #nature, #home")

const filterButtons = (buttons.forEach((buttons) => buttons.addEventListener("click", function(){
  let type = buttons.textContent;
  let newArr = Menu.filter((food) => food.type.includes(type));
  removeCards();
  addcards(newArr);
})))
*/

function filterButtons() {
  btns.forEach((button) =>
    button.addEventListener("click", function () {
      console.log(button);
      let type = button.id;
      console.log(type);
      removeCards();
      if (type.includes("people")) {
        addcards(newArrs.people);
        console.log(people);
      }
      if (type.includes("sweets")) {
        addcards(newArrs.sweets);
        console.log(sweets);
      }
      if (type.includes("celebrity")) {
        addcards(newArrs.celebrity);
        console.log(celebrity);
      }
      if (type.includes("nature")) {
        addcards(newArrs.nature);
        console.log(nature);
      }
      if (type.includes("home")) {
        addcards(newArrs.home);
        console.log(home);
      }
      if (type.includes("all")) {
        addcards(Menu);
        console.log(all);
      } else {
        console.log("mkay");
      }
    })
  );
}
filterButtons();

