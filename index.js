const GRID = document.querySelector("#grid");
const GRID_ELEMENTS = document.querySelectorAll(".grid-element")
const GRID_SIZE = 640; //grid size in px;

let mouseDown = false;
GRID.addEventListener("click", () => {
    if(mouseDown === false)
        mouseDown = true;
    else 
        mouseDown = false;
});

let gridRowSize = 16;
function setGrid() {
    for(let i = 0; i < gridRowSize; i++) {
        for(let j = 0; j < gridRowSize; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-element");
            div.style.width = `${GRID_SIZE/gridRowSize}px`;
            div.style.height = `${GRID_SIZE/gridRowSize}px`;
            div.addEventListener("mouseover", changeColor);
            GRID.appendChild(div);
        }
    }
}

function setGridSize(size) {
    GRID.style.width = `${GRID_SIZE}px`;
    GRID.style.height = `${GRID_SIZE}px`;
}

let currentColorMode = "color";
let currentColor = "#000000";
function changeColor(e) {
    if (!mouseDown)
        return
    
    if(currentColorMode === "color") {
        e.target.style.backgroundColor = currentColor;
    }
    else if(currentColorMode === "eraser")
        e.target.style.backgroundColor = "white";
}

function reloadGrid() {
    clearGrid()
    setGrid()
  }
  
  function clearGrid() {
    grid.innerHTML = ''
  }

const COLOR_PICKER = document.querySelector("#color");
COLOR_PICKER.addEventListener("change", e => {
    currentColor = e.target.value
});

const COLOR_BTN = document.querySelector("#color-btn");
COLOR_BTN.addEventListener("click", () => currentColorMode = "color");
  
const ERASER_BTN = document.querySelector("#eraser");
ERASER_BTN.addEventListener("click", () => currentColorMode = "eraser");
  
const CLEAR_BTN = document.querySelector("#clear");
CLEAR_BTN.addEventListener("click", reloadGrid);

const SIZE_PICKER = document.querySelector("#grid-size");
const SIZE_INFO = document.querySelector("#grid-size-info");

SIZE_PICKER.addEventListener("input", e => {
    SIZE_INFO.textContent = `${e.target.value} x ${e.target.value}`;
    gridRowSize = e.target.value;
});

SIZE_PICKER.addEventListener("change", e => {
    reloadGrid();
});

//Initialize the grid on body load
document.body.onload = () => {
    setGrid();
    setGridSize(GRID_SIZE);
};