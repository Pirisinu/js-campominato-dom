 /* 
**Svolgimento**


 */
//ELEMENT
const squareContainer = document.querySelector('.container');
const difficultyChoice = document.querySelector('.difficulty-choice');

let difficultySelected;
let difCounter;

const bombTot = 16;
const bombFind = [];
let idBombArray = [];
let idBomb ;

difficultyChoice.append(btnStart());



/* FUNZIONI GENERALI */
//INIT FUNCTION
function init(){

  //Richiamo la select per ottenere il suo valore
  difficultySelected = document.querySelector('#select-difficulty');

  //Genero gli id delle bombe
  idBombGeneretor(bombTot);
  console.log(idBombGeneretor(bombTot));

  //Vado a ciclare in base al valore della select
  for (let i = 1; i <= difficultySelected.value; i++) {
    //Genero i quadrati
    const square = createBox(i);

    //EventListner al click
    square.addEventListener('click', function(){
      console.log(square.id)
      this.classList.toggle('clicked');
    });
    //Vado ad appendere i quadrati al mio contenitore
    squareContainer.append(square);
  }
  //Effettuo il reset alla difficoltà selezionata
  difficultySelected.value = '';
}

//BTN START FUNCTION
function btnStart(){
  //creiamo il bottone in html
  const btn = document.createElement('button');
  
  //ci scrivo sopra
  btn.innerHTML= 'Scegli prima la difficoltà, <br/> poi clicca qui per iniziare.';
  
  //Aggiungo un evento al click per far iniziare il gioco
  btn.addEventListener('click', function(){
    //Elimina cio che c'è in precedenza
    reset()
    //Inizia una nuova partita
    init();
  });
  
  return btn;
}

//RANDOM NUM GENERATOR FUNCTION
function randomNum(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}



function idBombGeneretor(bombTot) {
  let idBombSet  = [];
  let count = 0;

  while (count < 16) {
    let idBomb = Math.floor(Math.random() * difficultySelected.value) + 1;
    if (!idBombSet.includes(idBomb)) {
      idBombSet.push(idBomb);
      count++;
    }
  }
  return idBombSet;
}
//ELEMENT GENERATOR FUNCTION
function createBox(index){
  const square = document.createElement('div');
  square.classList.add('square', 'easy');
  //Creo una condizione per assegnare le giuste classi in html
  if (difficultySelected.value == 81) {
    square.classList.add('mid');
    square.classList.remove('easy');
  }
  else if (difficultySelected.value == 49) {
    square.classList.add('hard');
    square.classList.remove('easy');
  }
  //
  square.innerHTML = `<span>${index}</span>`;
  square.id = index;

  return square;
}
//RESET FUNCTION
function reset(){
  squareContainer.innerHTML = '';
}