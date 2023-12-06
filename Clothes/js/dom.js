const DOMSelectors = {
    container: document.getElementById("container"),
    people: document.getElementById("people"),
    sweets: document.getElementById("sweets"),
    celebrity: document.getElementById("celebrity"),
    nature: document.getElementById("nature"),
    home: document.getElementById("home"),
    form: document.querySelectorAll("filter-btn"),
    cards: document.querySelectorAll(".cards"),
    foodName: document.querySelector(".food-name"),
    foodImage: document.querySelector(".card-img"),
    foodPrice: document.querySelector(".price")
  };
  
  export { DOMSelectors };