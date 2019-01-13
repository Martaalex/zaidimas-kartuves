

var started = false;
var randomZodis = '';
var answerArray = [];
var wrongLetter = [];
var answer = '';
var lives = 5;


const zodziuArr = ['Miestas', 'Mašina', 'Mokykla', 'Šuo', 'Vaivorykštė', 'Pilis', 'Pelėda', 'Katinas', 'Voverė', 'Laivas', 'Enciklopėdija', 'Pasaulis', 'Striukė', 'Parmezanas'];
const zodziuUzuominos = ['Vieta kur daug šurmulio', 'Transporto priemonė', 'Mokslo įstaiga', 'Geriausias žmogaus draugas', 'Įvairiaspalvė', 'Senovinis pastatas', 'Paukštis', 'Žmonės nuo senu laiku jam tarnauja :D', 'Turi gražią uodegą', 'Vandens transportas', 'Viską žino ... ', 'Tu mano visas ...', 'Nešiojame kai yra šalta', 'Sūrio pavadinimas'];

var alphabet = ['A', 'Ą', 'B', 'C', 'Č', 'D', 'E', 'Ę', 'Ė', 'F', 'G', 'H', 'I', 'Į', 'Y', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ų', 'Ū', 'V', 'Z', 'Ž'];


var clickSound = document.getElementById("mySound");
var bgm = document.getElementById("myAudio");



var buttons = () => {
  var myButtons = document.getElementById('buttons');
  var letters = document.createElement('div');

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
   var list = document.createElement('button');
    list.className = 'letter';
    list.value = alphabet[i];
   
    list.addEventListener('click', spejimas => { 
      clickSound.play();
     let count = 0;
     spejimas.target.setAttribute('disabled',true);
     console.log(spejimas);
      randomZodis.toUpperCase().split('').forEach((raide, index) => {
      if (raide.indexOf(spejimas.target.value) != -1 ){ 
       answerArray[index] = raide;     
            answer = answerArray.join(''); 
       writeAnswer.textContent = answer;
       count++;
      }  
     if (answer === randomZodis.toUpperCase()){
      writeAnswer.textContent = `Tu atspėjai žodį 😁 - ${answer}`;
      removeBtn();
      bgm.pause();
        }
     });

      if (count === 0){
        wrongLetter.push(spejimas.target.value);
        lives--;
        writeLives.textContent = 'Tu turi dar ' + lives + ' bandymus.' ;
        animate();
          }
          if (lives===0){
            writeLives.textContent = 'Neatspejai 🙁, žodis buvo :' + randomZodis ;
            removeBtn();
            bgm.pause();
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
const covercont =document.querySelector('.covercont');
const startBtn = document.createElement('button');
startBtn.setAttribute("id", "start");
startBtn.textContent = 'start';
covercont.appendChild(startBtn);
startBtn.addEventListener('click', randomNumber);

function randomNumber() {
     randomNum = Math.floor(Math.random() * zodziuArr.length);
   randomZodis = zodziuArr[randomNum];
  for (var i = 0; i < randomZodis.length; i++) {
    answerArray[i] = " _ ";
  }
  writeAnswer.textContent = answerArray ;
  writeLives.textContent = 'Tu turi dar ' + lives + ' bandymus.' ;
 if(!started){

   buttons();
   startBtn.style.display = 'none';
   restartBtn.style.display = 'inline-flex';
   uzuominaBtn.style.display = 'inline-flex';
  }
  started=true;
  drawingCanva();
  bgm.loop = true;
  bgm.play();
};

const restart = () =>{
  location.reload();
  bgm.pause();
};

const restartBtn = document.createElement('button');
restartBtn.setAttribute("id", "restart");
restartBtn.textContent = 'restart';
app.appendChild(restartBtn);
restartBtn.style.display = 'none';
restartBtn.addEventListener('click', restart) 

const uzuominaBtn = document.createElement('button');
uzuominaBtn.setAttribute("id", "hint");
uzuominaBtn.textContent = 'hint';
app.appendChild(uzuominaBtn);
uzuominaBtn.style.display = 'none';
uzuominaBtn.addEventListener('click', hint);

function hint(){
  var uzuomina = document.createElement('h2');
  app.appendChild(uzuomina);
  uzuomina.textContent = "Užuomina: - " + zodziuUzuominos[randomNum];
  uzuominaBtn.setAttribute('disabled',true);
};

var writeAnswer = document.createElement('div');
app.appendChild(writeAnswer);            

var writeLives = document.createElement('div');

app.appendChild(writeLives);    



// Animate man
var animate = function () {
  var drawMe = lives ;
  drawArray[drawMe]();
}

 drawingCanva = function(){
  var stickman = document.createElement('canvas');
  stickman.setAttribute('id', 'stickman');
  context = stickman.getContext('2d');
var board = document.getElementById('board');
stickman.width  = board.offsetWidth;
stickman.height = board.offsetHeight;
board.appendChild(stickman);
context.beginPath();
context.strokeStyle = "#fefef";
context.lineWidth = 2;
}

head = function(){
  stickman = document.getElementById('stickman');
  context = stickman.getContext('2d');
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI*2, true);
  context.stroke();
}

draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

frame1 = function() {
  draw (0, 5, 70, 5);
};

frame2 = function() {
  draw (60, 5, 60, 15);
};

torso = function() {
  draw (60, 36, 60, 70);
};

arm = function() {
  draw (60, 46, 100, 50);
  draw (60, 46, 20, 50);
};

leg = function() {
  draw (60, 70, 100, 100);
  draw (60, 70, 20, 100);
};
drawArray = [leg, arm,  torso,  head, frame2, frame1];
