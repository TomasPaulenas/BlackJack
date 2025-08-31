//**
// * 2C= two of clubs
// * 2D= two of diamonds
// * 2H= two of hearts
// * 2S= two of spades

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let  puntosComputadora = 0;

//referencias html
const btnPedir = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo = document.querySelector('#btnNuevo')

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');



const puntosHTML = document.querySelectorAll('small')
  

//this function creates a new deck
const crearDeck = () => {

    for( let i = 2; i <= 10; i++){
        for (let tipo of tipos) {
            deck.push( i + tipo)  
        }
    }

    ;

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push( especial + tipo)
        }   
    }
    //console.log(deck)

    deck =_.shuffle(deck);
    console.log(deck)
    return deck;

}
crearDeck();


//This function allows us to take a card from the deck
const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'There is no more cards in the deck'
    }
    const carta = deck.pop()
    return carta;
} 

//pedirCarta();
const valorCarta = ( carta ) =>{
 
    const valor = carta.substring(0, carta.length - 1 );
    return (isNaN( valor )) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}

const turnoComputadora = ( puntosMinimos ) => {

do{
const carta = pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta(carta);
puntosHTML[1].innerText = puntosComputadora;

const imgCarta = document.createElement('img');
imgCarta.src = `cartas/${carta}.png`;
imgCarta.classList.add('carta');
divCartasComputadora.append(imgCarta);

if( puntosMinimos > 21){
    break;
}


} while(( puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21)  );

setTimeout(() => {
    
if( puntosComputadora === puntosMinimos){
    alert('Nobody wins');
} else if (puntosMinimos > 21){
    alert('Computer Wins');
}else if(puntosComputadora > 21){   
    alert('player wins');
}else if(puntosComputadora>= puntosMinimos){
    alert('computer wins')       
}else{
    alert('plater wins')
}
    }, 200 );
}

// Eventos
btnPedir.addEventListener('click' , () => {

const carta = pedirCarta();

puntosJugador = puntosJugador + valorCarta(carta);
puntosHTML[0].innerText = puntosJugador;

const imgCarta = document.createElement('img');
imgCarta.src = `cartas/${carta}.png`;
imgCarta.classList.add('carta');
divCartasJugador.append(imgCarta);


if(puntosJugador > 21){
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);

} else if (puntosJugador === 21 ) { 
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);


}

});

btnDetener.addEventListener('click', () =>  {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador); 


})

btnNuevo.addEventListener( 'click' , () =>{
    deck = crearDeck();
    
    puntosComputadora = 0;
    puntosJugador = 0; 
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

})

