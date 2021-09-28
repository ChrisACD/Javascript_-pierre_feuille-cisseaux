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
  
    // affichage du  message 
    


    // player selection
    let playerSelection = e.target.innerText;
    console.log(playerSelection);

     
    if(playerSelection === "Pierre") {

      joueur.classList.toggle('stone');

    } else if(playerSelection === "Feuille") {

        joueur.classList.toggle('paper');
    } else if(playerSelection === "Sciseaux"){

        joueur.classList.toggle('scissors');
    } else {

        return false;
    }



    // computer selection

    let computerSelection = Math.random()
     
    if(computerSelection < 0.34) {

      computerSelection = "Pierre";
      computer.classList.toggle('stone');

    } else if(computerSelection <= 0.67) {

        computerSelection = "Feuille";
        computer.classList.toggle('paper');
    } else {

        computerSelection = "Sciseaux";
        computer.classList.toggle('scissors');
    }


//  definition du resultat

let  result = checkWinner(playerSelection,computerSelection);
console.log(result);

if(result=="joueur") {

    result += " wins!"
    console.log(message);
    message.style.display ="True";
    winner[0]++;

} else if (result == "computer") {
    message.style.display ="True";
    result += " wins!"
    winner[1]++;

} else {
    message.style.display ="True";
    result += " Match null!"
}

score.innerHTML="joueur [" + winner[0] + "] computer[" + winner[1]+"]";

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

    if(co ==="Sciseaux"){
   
        return"computer"
    } else {
   
       return "joueur"
    }
   
   }


   
if(pl==="Sciseaux") {

    if(co ==="Feuille"){
   
        return"joueur"
    } else {
   
       return "computer"
    }
   
   }


}











































