let randomButton = document.querySelector("button");
let p = document.querySelector("p");

let array = ["hello","hi","margin"];

function random(){
  return p.innerHTML = array[Math.floor(Math.random() * array.length)];
}

randomButton.addEventListener("click", random);