 /* 
**Svolgimento**


 */
//ELEMENT
const squareContainer = document.querySelector('.container');
const difficultyChoice = document.querySelector('.difficulty-choice');
let difficultySelected;
let difCounter;
difficultyChoice.append(btnStart());



/* FUNZIONI GENERALI */
//INIT FUNCTION
function init(){

  difficultySelected = document.querySelector('#select-difficulty');
  console.log(difficultySelected.value)


  for (let i = 1; i <= difficultySelected.value; i++) {

    const square = createBox(i);


    square.addEventListener('click', function(){
      console.log(square.id)
      this.classList.toggle('clicked');
    });
    squareContainer.append(square);
  }
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

    reset()
    init();
    
  });

  return btn;
}

//RANDOM NUM GENERATOR FUNCTION
function randomNum(min, max){
 return Math.floor(Math.random() * (max - min +1) + min);
}

//ELEMENT GENERATOR FUNCTION
function createBox(index){
  const square = document.createElement('div');
  square.classList.add('square', 'easy');
  if (difficultySelected.value == 81) {
    square.classList.add('mid');
    square.classList.remove('easy');
  }
  else if (difficultySelected.value == 49) {
    square.classList.add('hard');
    square.classList.remove('easy');
  }
  square.innerHTML = `<span>${index}</span>`;
  square.id = index;

  return square;
}
//RESET FUNCTION
function reset(){
  squareContainer.innerHTML = '';

}