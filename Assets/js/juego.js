//**
// * 2C= two of clubs
// * 2D= two of diamonds
// * 2H= two of hearts
// * 2S= two of spades

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
  

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
    
    console.log(deck);
    console.log(carta);  //The card has to be from the deck
    return carta;
} 

//pedirCarta();
const valorCarta = ( carta ) =>{
 
    const valor = carta.substring(0, carta.length - 1 );
    return (isNaN( valor )) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}
const valor = valorCarta(pedirCarta());
console.log({valor});