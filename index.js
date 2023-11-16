const showTime = document.querySelector('.showTimer');
const secs = document.getElementById('20secs'); 
const cappucino = document.getElementById('cappucino'); 
let int = null;
let seconds = 0
let minutes = 0
let heures = 0
/* 
setInterval nous permet d'executer une fonction ou 
un code pendant chaque lapse de temps.
 */


//Role de la fonction setTime pour remarquer la decrementation de la variable
// seconds dans l'interface

/* 
La fonction doit retirer une seconde de la variable seconds apres chaque seconde
 */

const setTime =()=>{
    showTime.textContent = `${heures}:${minutes}:${seconds}`;
    seconds--;
    console.log(0);
    // la condition ci verfie si les seconde sont 00, de les ramener a 20 et de faire -1 secs
  if (seconds === 0 && minutes > 0){
    seconds = 9
    minutes--
    console.log(minutes);
 
  }else
  if (minutes === 0 && seconds === 0) {
        console.log(minutes);
        clearInterval(int)
        showTime.textContent = 'terminer'
    
  }

}

secs.addEventListener('click', ()=>{
    seconds = 20
   int = setInterval(setTime, 1000)
})
cappucino.addEventListener('click', ()=>{
    seconds = 9;
    minutes = 1
   int = setInterval(setTime, 1000)
})