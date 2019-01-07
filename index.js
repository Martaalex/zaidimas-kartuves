var started = false;
var randomZodis = '';
var answerArray = [];
var wrongLetter = 0;
var answer = '';

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
    list.addEventListener('click', e => { 
     randomZodis.toUpperCase().split('').forEach((raide, index) => {
      if (raide.indexOf(e.target.value) != -1 ){ 
      console.log(index, raide)
      answerArray[index] = raide;     
       answer = answerArray.join(''); 
       write.textContent = answer;
      }  
      if (answer === randomZodis.toUpperCase()){
      write.textContent = `Tu atspėjai žodį - ${answer}`;
        }
      });
     })
    list.textContent = alphabet[i];
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
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
  write.textContent = answerArray;
 if(!started){
   buttons();
   startBtn.style.display = 'none';
  }
  started=true;
};


var write = document.createElement('div');
app.appendChild(write);

