// Declaration des variables
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('.btn');
const computer = document.querySelector('.computer');
const joueur = document.querySelector('.joueur');
console.log(buttons);
let winner = [0,0];

// add event listener when we click the buttons menu

for(let i=0; i<buttons.length; i++){

buttons[i].addEventListener("click", playGame);

}


// fonction play the game 

function playGame(e) {
  
   
    


    // player selection
    let playerSelection = e.target.innerText;
    console.log(playerSelection);

     
    if(playerSelection === "Pierre") {

      joueur.classList.add('stone');
      joueur.classList.remove('paper');
      joueur.classList.remove('scissors');

    } else if(playerSelection === "Feuille") {
        joueur.classList.add('paper');
        joueur.classList.remove('stone');
        joueur.classList.remove('scissors');


    } else if(playerSelection === "Ciseaux"){

        joueur.classList.add('scissors');
        joueur.classList.remove('stone');
        joueur.classList.remove('paper');
    } else {

        return false;
    }



    // computer selection

    let computerSelection = Math.random()
     
    if(computerSelection < 0.34) {

      computerSelection = "Pierre";
      computer.classList.add('stone');
      computer.classList.remove('paper');
      computer.classList.remove('scissors');

    } else if(computerSelection <= 0.67) {

        computerSelection = "Feuille";
        computer.classList.add('paper');
        computer.classList.remove('stone');
        computer.classList.remove('scissors');
    } else {

        computerSelection = "Ciseaux";
        computer.classList.add('scissors');
        computer.classList.remove('stone');
        computer.classList.remove('paper');
    }


//  definition du resultat

let  result = checkWinner(playerSelection,computerSelection);
console.log(result);

if(result=="joueur") {

    result += " wins!"
    console.log(message);
    winner[0]++;
    let sound = new Audio("sounds/bravo.mp3")
    sound.play();

} else if (result == "computer") {
 
    result += " wins!"
    winner[1]++;

} else {
   
    result += " Match null!"
}

score.innerHTML="Score: <br>  Joueur : " + winner[0] + " <br>  Computer : " + winner[1]+" ";

messager(playerSelection + " vs " + computerSelection + "<br>  <br>" + result + "<br>");


 }


//  Fonction message 

function  messager(mes){

  message.innerHTML = mes;

}

//  Fonction check winner

function checkWinner(pl,co) {

if(pl=== co){

    return " Draw"
    

}

if(pl==="Pierre") {

 if(co ==="Feuille"){

     return"computer"
 } else {

    return "joueur"
 }

}


if(pl==="Feuille") {

    if(co ==="Ciseaux"){
   
        return"computer"
    } else {
   
       return "joueur"
    }
   
   }


   
if(pl==="Ciseaux") {

    if(co ==="Feuille"){
   
        return"joueur"
    } else {
   
       return "computer"
    }
   
   }


}











































