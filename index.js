const GRID_ELEMENTS = document.querySelector("#grid-elements");
const GRID_SIZE = 640; //grid size in px;
GRID_ELEMENTS.style.width = `${640}px`
GRID_ELEMENTS.style.height = `${640}px`

let gridRowSize = 16;
for(let i = 0; i < gridRowSize; i++) {
    for(let j = 0; j < gridRowSize; j++) {
        const div = document.createElement("div");
        div.classList.add("grid-element");
        div.style.width = `${640/gridRowSize}px`
        div.style.height = `${640/gridRowSize}px`
        GRID_ELEMENTS.appendChild(div);
    }
}