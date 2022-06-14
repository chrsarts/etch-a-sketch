const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset-btn");
const generateGrid = () => {
  for (let i = 0; i <= 255; i++) {
    const gridItem = document.createElement("div");
    gridItem.setAttribute("class", "grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridItem);
  }
};

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

generateGrid();
