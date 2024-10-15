const gridContainer = document.getElementById('gridContainer');
const content = document.querySelector('.content');
const gridSizeSlider = document.getElementById('gridSizeSlider');
const sliderValueDisplay = document.getElementById('sliderValue');

function updateGrid() {
    const gridSize = parseInt(gridSizeSlider.value); // Get the current value of the slider

    sliderValueDisplay.textContent = gridSize;

    gridContainer.innerHTML = '';

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.addEventListener('mouseover', function() {
            gridCell.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(gridCell);
    }
}

gridSizeSlider.addEventListener('input', updateGrid);

updateGrid();


