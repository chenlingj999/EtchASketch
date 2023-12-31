const container = document.querySelector('.container');
let gridSize = 16;
let i = 0;
while (i < gridSize ** 2) {
    const square = document.createElement("div");
    square.classList.add("grid");
    container.appendChild(square);
    square.addEventListener(
        "mouseover", 
        (event) => {
            event.target.style.backgroundColor = "black";
        }
    );
    i++;
}