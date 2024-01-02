const container = document.querySelector('.container');
function setColor(square) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    
    if (square.classList.contains("rainbow")) {
        square.style.backgroundColor = "#" + randomColor;
    } else if (square.classList.contains("black")) {
        square.style.backgroundColor = 'black';
    } else if (square.classList.contains("eraser")) {
        square.style.backgroundColor = 'white';
    } else {
        square.style.backgroundColor = 'black';
    }
}

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
                setColor(square);
            }
        });

        square.addEventListener("mousedown", (event) => {
            if (event.buttons === 1) {
                setColor(square);
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

function setMode(modeClass) {
    const childDivs = container.querySelectorAll('.grid');
    childDivs.forEach((div) => {
        div.classList.remove('black', 'eraser', 'rainbow');
        div.classList.add(modeClass);
    });
}

rainbowMode.addEventListener('click', () => {
    setMode('rainbow');
});

eraserMode.addEventListener('click', () => {
    setMode('eraser');
});

blackMode.addEventListener('click', () => {
    setMode('black');
});