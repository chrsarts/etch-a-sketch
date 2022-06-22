const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset-btn");
const gridBtn = document.querySelector(".grid-btn");
const changeColorBtn = document.querySelector(".changeColor-btn");
const blackBtn = document.querySelector(".black-btn");

let gridSize = 16;
let isFunMode = false;

const generateGrid = () => {
  for (let i = 0; i <= gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.setAttribute("class", "grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridItem);
  }
};

function changeColor(e) {
  if (!isFunMode) {
    e.target.style.backgroundColor = "black";
  } else {
    e.target.style.backgroundColor = randomColor();
  }
}

function randomColor() {
  let randColor = "";
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    randColor = `rgb(${r} ${g} ${b})`;
  }

  return randColor;
}

function resetColors() {
  let x = document.querySelectorAll(".grid-item");
  x.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

resetBtn.addEventListener("click", resetColors);

changeColorBtn.addEventListener("click", () => {
  isFunMode = !isFunMode;
  if (isFunMode) changeColorBtn.textContent = "Turn off fun mode :C";
  else changeColorBtn.textContent = "Fun mode!";
});

generateGrid();
randomColor();
