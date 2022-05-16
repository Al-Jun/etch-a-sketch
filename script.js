function makeGrid () {
    gridValue.textContent = `${grid} X ${grid}`;
    etchBox.style.gridTemplateColumns = `repeat(${grid}, minmax(1px, 1fr))`;
    etchBox.style.gridTemplateRows = `repeat(${grid}, minmax(1px, 1fr))`;
    for (let i = 1; i <= (grid*grid); ++i) {
        const box = document.createElement('div');
        box.classList.add('individual-box');
        etchBox.appendChild(box);
    }
}

function changeColor () {
    const allBox = etchBox.querySelectorAll('div');
    allBox.forEach((item) => {
        item.addEventListener('mouseenter', () =>
        item.style.backgroundColor = `${color}`);
        item.addEventListener('mouseleave', () => {
            if (!isChange) {
                item.style.backgroundColor = 'whitesmoke';
            }
        })
    });
}

const colorButton = document.querySelector('#color-input');
const gridSlider = document.querySelector('#grid-size');
const etchBox = document.querySelector('.etch-box');
const gridRow = document.querySelector('.grid-row');
const resetButton = document.querySelector('#reset');

const gridValue = document.createElement('div');

let color = '#000000';
let grid = '20';
let isChange = false;

gridValue.textContent = `${grid} X ${grid}`;
gridValue.style.textAlign = 'center';
gridRow.appendChild(gridValue);

colorButton.addEventListener('change', (e) => color = e.target.value)
gridSlider.addEventListener('change', (e) => {
    grid = e.target.value;
    etchBox.replaceChildren();
    makeGrid();
})
resetButton.addEventListener('click', () => {
    grid = '20';
    color = '#000000';
    etchBox.replaceChildren();
    makeGrid();
    changeColor();
})

makeGrid();
changeColor();