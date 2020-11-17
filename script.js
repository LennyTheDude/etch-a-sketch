let grid = document.getElementById('grid');

for (let row = 0; row < 16; row++) {
    for (let column = 0; column < 16; column++) {
        let square = document.createElement('div');
        square.className = 'item';
        grid.appendChild(square);
    }
}

grid.addEventListener('pointerout', event => {
    if (event.target.className === 'item') {
        event.target.style.backgroundColor = 'black';
    }
});