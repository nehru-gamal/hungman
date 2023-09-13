const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters")

lettersArray.forEach(letter => {

    let span = document.createElement("span");

    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);

    span.className = "letter-box";

    lettersContainer.appendChild(span);

});

// Object Of Words 
const words = {

    movies: ["GodFather", "Prestige", "Inception", "Wiplash", "Memont", "Interstellar","Kill Bill","Goodfellas","Fight Club","Gladiator","The Dark Knight"],
    people: ["Alpert Einstein", "Cleopatra", "Ghandi", "Nehru Gamal","Hitler","Tout Ankh Amon","Ramesses","Alexander","Salah El Deen"],
    Anime: [ "One Piece","Hunter X Hunter", "Naruto", "Death Note","Dragon Ball","Monster","Attak On Titan","Yu Gi Oh","Bleach"],
    Shows: ["THe Sopranos","Breaking Bad", "Game Of Thrones", "Prison Break", "The Walking Dead","The Boys","Friends","Black Mirror","Dark","Lost","You","Rick And Morty"],
    Player: ["Ronaldo", "Messi", "Shika", "Zizo", "Ibra", "Luka Modrish", "Pirlo", "Mo Salah","Xavi","Benzema","Hazard","Mane","Haland","Mpape","Zidan","Tony Kros","Harry Maguare","Marcelo","Rammos"],
    family: ["Nehru", "Tito", "Amir", "Gamal", "Ramez", "Ehab","Martin","Mark","Wagdy","Ramy"]

}

//Get Random Words
let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];


document.querySelector(".game-info .category span").innerHTML = randomPropName;


let lettersGuessContainer = document.querySelector(".letters-guess");

let letterAndSpace = Array.from(randomValueValue);

letterAndSpace.forEach(letter => {

    let embtySpan = document.createElement("span");

    if(letter === ' '){

        embtySpan.className = 'with-space';

    }

    lettersGuessContainer.appendChild(embtySpan);

});

let lettersGuessSpan = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0 ;

let theDraw = document.querySelector(".hangman-draw");


document.addEventListener("click", (e) => {

    theStatus = false ;

    if(e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChocenWord = Array.from(randomValueValue.toLowerCase());

        theChocenWord.forEach((wordLetter, wordIndex) => {

            if(theClickedLetter == wordLetter){

                theStatus = true ;

                lettersGuessSpan.forEach((span, spanIndex) => {

                    if(wordIndex === spanIndex){

                        span.innerHTML = theClickedLetter ;

                    }

                })

            }

        });

        if(theStatus !== true){

            wrongAttempts++;

            theDraw.classList.add(`wrong-${wrongAttempts}`);e

            if(wrongAttempts === 8){

                endGame();

                lettersContainer.classList.add("finished");

            }

        }

    }

});

function endGame(){

    let div = document.createElement("div");

    let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue}`);

    div.appendChild(divText);

    div.className = 'popup';

    document.body.appendChild(div);
}

