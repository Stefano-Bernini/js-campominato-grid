const button = document.getElementById('play')

button.addEventListener('click', function(){
    const grid = document.getElementById('grid')

    // svuoto la griglia
    grid.innerHTML = '';

    // genero le caselle da scrivere nella griglia
    for(let i = 0; i < 100; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.append(square);
    }
})