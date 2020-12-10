function drawGrid (size) {
    grid.innerHTML = "";
    itemWidth = grid.scrollWidth / size;
    grid.setAttribute(`style`, `grid-template-columns: repeat(${size}, ${itemWidth}px); grid-template-rows: repeat(${size}, ${itemWidth}px)"`);
    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            let square = document.createElement('div');
            square.className = 'item';
            square.style.width = `${itemWidth}px`;
            square.style.height = `${itemWidth}px`;
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
            grid.appendChild(square);
        }
    }
}

let grid = document.getElementById('grid');
let gridSize = 10;
let itemWidth;
drawGrid(gridSize);
let colourControls = document.getElementById('colours');
let newGrid = document.getElementById('new-grid');
let clearGrid = document.getElementById('clear-grid');
let drawSwitch = false;

let mode = 'pure-black';

grid.setAttribute(`style`, `grid-template-columns: repeat(10, ${itemWidth}px); grid-template-rows: repeat(10, ${itemWidth}px)"`);

colourControls.addEventListener('click', event => { // change mode after 1 of the 3 buttons is pressed
    if (event.target.className === 'chmod') {
        mode = event.target.id;
    } 
})

newGrid.addEventListener('click', function() { // redrawing the grid
    let size = document.getElementById('grid-size').value;    
    if (size > 0 && size <= 100 && size %1 == 0) {
        gridSize = size;
        drawGrid(gridSize);  
    } else if (size > 100) {
        window.alert('100 is the maximum size');
    } else if (size %1 !== 0) {
        window.alert(`has to be an integer`);
    }
})

clearGrid.addEventListener('click', function () { drawGrid(gridSize);});

grid.addEventListener('pointerover', event => { // changing an item's color on mouse over
    if (event.target.className === 'item' && drawSwitch === true) {
        switch (mode) {
            case 'pure-black':
                event.target.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                break;
            case 'black-gradient':
                let opacity = parseFloat(event.target.style.backgroundColor.substring(13));
                if (opacity != NaN) {
                    opacity += 0.1;
                    event.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                }
                break;
            case 'random-colour':
                event.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                break;
            default:
                break;
        }
    }
});

grid.addEventListener('click', function() { drawSwitch = !drawSwitch}); // start/end drawing after clicking inside the grid

