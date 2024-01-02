const container = document.querySelector('.container');
function generateGrid(gridSize) {
    let i = 0;
    while (i < gridSize ** 2) {
        const square = document.createElement("div");
        const itemSize = (800 / gridSize)
        square.style.width = `${itemSize}px`;
        square.style.height = `${itemSize}px`;
        square.classList.add("grid");
        container.appendChild(square);
        square.addEventListener("mouseover", (event) => {
            if (event.buttons === 1) {
                let squareClasses = square.classList;
                if (squareClasses.contains("rainbow")) {
                    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    event.target.style.backgroundColor = "#" + randomColor;
                } else if (squareClasses.contains("black")) {
                    event.target.style.backgroundColor = "black";
                } else if (squareClasses.contains("eraser")) {
                    event.target.style.backgroundColor = "white";
                } else {
                    event.target.style.backgroundColor = "black";
                }
            }
        });
        square.addEventListener("mousedown", (event) => {
            if (event.buttons === 1) {
                let squareClasses = square.classList;
                if (squareClasses.contains("rainbow")) {
                    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    event.target.style.backgroundColor = "#" + randomColor;
                } else if (squareClasses.contains("black")) {
                    event.target.style.backgroundColor = "black";
                } else if (squareClasses.contains("eraser")) {
                    event.target.style.backgroundColor = "white";
                } else {
                    event.target.style.backgroundColor = "black";
                }
            }
        });

        i++;
    }
}
generateGrid(16);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

const submitSize = document.querySelector('[data-submit-button]');
submitSize.addEventListener('click', () => {
    const input = document.getElementById('size');
    const size = input.value;
    input.value = '';

    if (isNaN(size) || (size < 1 || size > 100)) return;
    container.innerHTML = "";
    generateGrid(size);
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
});

const rainbowMode = document.querySelector('#rainbow');
const eraserMode = document.querySelector('#erase');
const blackMode = document.querySelector('#black');

rainbowMode.addEventListener('click', () => {
    const childDivs = container.querySelectorAll('.grid');
    childDivs.forEach((div) => {
        div.classList.remove('black');
        div.classList.remove('eraser');
        div.classList.add('rainbow');
    });
});

eraserMode.addEventListener('click', () => {
    const childDivs = container.querySelectorAll('.grid');
    childDivs.forEach((div) => {
        div.classList.remove('black');
        div.classList.remove('rainbow');
        div.classList.add('eraser');
    });
});

blackMode.addEventListener('click', () => {
    const childDivs = container.querySelectorAll('.grid');
    childDivs.forEach((div) => {
        div.classList.remove('rainbow');
        div.classList.remove('eraser');
        div.classList.add('black');
    });
});