var started = false;
var randomZodis = '';
var answerArray = [];
var wrongLetter = [];
var answer = '';
var lives = 5;

const zodziuArr = ['Miestas', 'Mašina', 'Mokykla', 'Daina', 'Vaivorykštė', 'Pilis', 'Pelėda', 'Katinas', 'Kopūstai', 'Kamštis', 'Voverė', 'Laivas', 'Enciklopėdija', 'Pasaulis', 'Striukė', 'Parmezanas'];

var alphabet = ['A', 'Ą', 'B', 'C', 'Č', 'D', 'E', 'Ę', 'Ė', 'F', 'G', 'H', 'I', 'Į', 'Y', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ų', 'Ū', 'V', 'Z', 'Ž'];

var buttons = () => {
  var myButtons = document.getElementById('buttons');
  var letters = document.createElement('div');

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
   var list = document.createElement('button');
    list.className = 'letter';
    list.value = alphabet[i];

    list.addEventListener('click', spejimas => { 
     let count = 0;
     spejimas.target.setAttribute('disabled',true);
     console.log(spejimas)
      randomZodis.toUpperCase().split('').forEach((raide, index) => {
      if (raide.indexOf(spejimas.target.value) != -1 ){ 
       answerArray[index] = raide;     
            answer = answerArray.join(''); 
       writeAnswer.textContent = answer;
       count++;
      }  
     if (answer === randomZodis.toUpperCase()){
      writeAnswer.textContent = `Tu atspėjai žodį - ${answer}`;
        }
     });

      if (count === 0){
        wrongLetter.push(spejimas.target.value);
        lives--;
        writeLives.textContent = 'Tu turi dar ' + lives + ' bandymus.' ;
        console.log(wrongLetter)
          }
          if (lives===0){
            writeLives.textContent = 'Neatspejai =( , žodis buvo :' + randomZodis ;
            removeBtn();
           // playAgain();
          }
     })
    list.textContent = alphabet[i];
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
}

const removeBtn = () =>{
    var btnContainer = document.querySelector('#alphabet');
    btnContainer.remove();
}

const app = document.getElementById('app');

const startBtn = document.createElement('button');
startBtn.setAttribute("id", "start");
startBtn.textContent = 'start';
app.appendChild(startBtn);
startBtn.addEventListener('click', randomNumber);

function randomNumber() {
  randomZodis = zodziuArr[Math.floor(Math.random() * zodziuArr.length)];
  for (var i = 0; i < randomZodis.length; i++) {
    answerArray[i] = " _ ";
  }
  writeAnswer.textContent = answerArray ;
  writeLives.textContent = 'Tu turi dar ' + lives + ' bandymus.' ;
 if(!started){

   buttons();
   startBtn.style.display = 'none';
   restartBtn.style.display = 'block';
  }
  started=true;
  
};

const restart = () =>{
  
};

const restartBtn = document.createElement('button');
restartBtn.setAttribute("id", "restart");
restartBtn.textContent = 'restart';
app.appendChild(restartBtn);
restartBtn.style.display = 'none';
restartBtn.addEventListener('click', restart) 


  var writeAnswer = document.createElement('div');
app.appendChild(writeAnswer);            
var writeLives = document.createElement('div');
app.appendChild(writeLives);    


