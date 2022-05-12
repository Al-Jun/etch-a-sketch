const colorButton = document.querySelector('#color-input');
const gridSlider = document.querySelector('#grid-size');
const etchBox = document.querySelector('.etch-box');
const box = document.createElement('div');

let color = colorButton.value;
let grid = gridSlider.value;

colorButton.addEventListener('change', (e) => color = e.target.value)
gridSlider.addEventListener('change', (e) => {
    grid = e.target.value;
    makeGrid();
})