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

const colorButton = document.querySelector('#color-input');
const gridSlider = document.querySelector('#grid-size');
const etchBox = document.querySelector('.etch-box');
const gridRow = document.querySelector('.grid-row');

const gridValue = document.createElement('div');

let color = colorButton.value;
let grid = gridSlider.value;

gridValue.textContent = `${grid} X ${grid}`;
gridValue.style.textAlign = 'center';
gridRow.appendChild(gridValue);

colorButton.addEventListener('change', (e) => color = e.target.value)
gridSlider.addEventListener('change', (e) => {
    grid = e.target.value;
    etchBox.replaceChildren();
    makeGrid();
})