// definizione della funzione che crea la griglia di gioco
function createNewGame(){
    const grid = document.getElementById('grid')

    // svuoto la griglia
    grid.innerHTML = '';

    // invoco la funzione create cells per creare le singole caselle di gioco
    createCells();
}

// definizione della funzione che crea le caselle della griglia
function createCells(){
    // genero le caselle da scrivere nella griglia
    for(let i = 0; i < 100; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = i + 1;

        square.addEventListener('click', function(){
            this.classList.add('clicked');
            console.log(this.innerText);
        })

        grid.append(square);
    }
}

const button = document.getElementById('play')

button.addEventListener('click', function(){
    // al click del pulsante invoco la funzione che crea la griglia di gioco
    createNewGame();
})