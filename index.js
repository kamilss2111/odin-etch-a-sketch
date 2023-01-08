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
function setGrid(size ,gridSize) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-element");
            div.style.width = `${gridSize/size}px`;
            div.style.height = `${gridSize/size}px`;
            div.addEventListener("mouseover", changeColor);
            GRID.appendChild(div);
        }
    }
}

function setGridSize(size) {
    GRID.style.width = `${size}px`;
    GRID.style.height = `${size}px`;
}

function reloadGrid() {
    clearGrid();
    setGrid(gridRowSize, GRID_SIZE);
}
  
function clearGrid() {
    grid.innerHTML = "";
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
        e.target.style.backgroundColor = "#ffffff";
}

function setBtnBackground(e) {
    COLOR_BTN.style.backgroundColor = "#1f1f1f";
    ERASER_BTN.style.backgroundColor = "#1f1f1f";

    e.target.style.backgroundColor = "#ffffff30";
}

const COLOR_PICKER = document.querySelector("#color");
COLOR_PICKER.addEventListener("change", e => currentColor = e.target.value);

const COLOR_BTN = document.querySelector("#color-btn");
COLOR_BTN.addEventListener("click", e => {
    currentColorMode = "color"
    setBtnBackground(e);
});

const ERASER_BTN = document.querySelector("#eraser");
ERASER_BTN.addEventListener("click", e => {
    currentColorMode = "eraser";
    setBtnBackground(e);
});

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
    setGrid(gridRowSize, GRID_SIZE);
    setGridSize(GRID_SIZE);
    COLOR_BTN.style.backgroundColor = "#ffffff30";
};