const GRID_ELEMENTS = document.querySelector("#grid-elements");
const GRID_SIZE = 640; //grid size in px;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let gridRowSize = 16;
function setGrid() {
    for(let i = 0; i < gridRowSize; i++) {
        for(let j = 0; j < gridRowSize; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-element");
            div.style.width = `${GRID_SIZE/gridRowSize}px`;
            div.style.height = `${GRID_SIZE/gridRowSize}px`;
            div.addEventListener("mouseover", changeColor);
            div.addEventListener("click", changeColor);
    
            GRID_ELEMENTS.appendChild(div);
        }
    }
}

function setGridSize(size) {
    GRID_ELEMENTS.style.width = `${GRID_SIZE}px`;
    GRID_ELEMENTS.style.height = `${GRID_SIZE}px`;
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown)
        return
    else 
        console.log("test");
}

//Initialize the grid on body load
document.body.onload = () => {
    setGrid();
    setGridSize(GRID_SIZE);
};