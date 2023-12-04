import '../css/style.css';
import { cabbage } from './cabbage';
import { DOMSelectors } from './dom';

//theme button
document.getElementById("Theme").addEventListener("click", function(){
    if(document.body.classList.contains("lightmode")){
      document.body.classList.add("darkmode");
       document.body.classList.remove("lightmode");
     } else{
      document.body.classList.add("lightmode")
      document.body.classList.remove("darkmode")
     }
   });

   //cards
function addcards (arr){
  arr.forEach((el) => {
    DOMSelectors.container.insertAdjacentHTML("afterend", 
    `
    <div class="card">
    <h4 class="food-name"> ${el.name}</h4>
   <img src="${el.img}" alt="" class="card-img">
    <h5 class="price"> ${el.price}</h5>
  </div>
    `
)})};
addcards(cabbage)
console.log(cabbage)

function removeCards(){
  const clear = document.getElementById("container");
  clear.insertAdjacentElement = ""
};
//buttons 
let buttons = document.querySelectorAll(".filterButton")

const filterButtons = (buttons.forEach((buttons) => buttons.addEventListener("click", function(){
  let type = buttons.textContent;
  let newArr = cabbage.filter((food) => food.type.includes(type));
  removeCards();
  addcards(newArr);
})))

DOMSelectors.form.addEventListener("click", function(event){
  event.preventDefault();
  removeCards();
  filterButtons();
})