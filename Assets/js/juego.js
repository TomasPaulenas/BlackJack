//**
// * 2C= two of clubs
// * 2D= two of diamonds
// * 2H= two of hearts
// * 2S= two of spades

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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
    console.log(deck)

    deck =_.shuffle(deck);

    console.log(deck)

       
}
crearDeck();