var cards = new Array();
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
var suits = ["clubs", "spades", "hearts", "diamonds"];


function newDeck()
{
    var deck = new Array();
    for (let s = 0; s < suits.length; s++) {

        for (let v = 0; v < values.length; v++) {
            var points=0;
            if (values[v] == "K" || values[v] == "Q" || values[v] == "J"){
                points = 10;
            }else if (values[v] = "A") {
                points = 11;
            }else {
                points = parseInt(values[v]);
            }

            newCard = {
                Suit: suits[s],
                Value: values[v],
                Points: points
            };

            deck.push(newCard);
        }

    }
    return deck;
}

function shuffle () {



    
}