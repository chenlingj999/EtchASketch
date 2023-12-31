const container = document.querySelector('.container');
let gridSize = 16;
let i = 0;
while (i < gridSize ** 2) {
    const square = document.createElement("div");
    square.style.width = '5px';
    square.style.height = '5px';
    square.classList.add("grid");
    container.appendChild(square);
    i++;
}