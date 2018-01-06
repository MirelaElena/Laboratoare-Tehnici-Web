var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;
var sesiune = null;

// Move the image on screen with 10px
function dogWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  // reset image position to start
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
  // delayMs = 50;
  clearTimeout(sesiune);
  dogTimer = window.setInterval(dogWalk, delayMs);
  changeInfo(false);
  sesiune = window.setTimeout(alertFunction, 5000);
  document.getElementById("start-button").disabled = true;
}


// Adaugati un eveniment pe butonul Start si creati functia pentru a porni miscarea catelului.
var startBtn = document.getElementById("start-button");

startBtn.addEventListener("click", startDogWalk);

// Adaugati un eveniment pe butonul Stop si creati functia pentru a opri miscarea catelului.
function stopDogWalk() {
  window.clearTimeout(sesiune);
  window.clearInterval(dogTimer);
  changeInfo(true);
  sesiune = window.setTimeout(alertFunction, 5000);
  document.getElementById("start-button").disabled = false;
}

var stopBtn = document.getElementById("stop-button");
stopBtn.addEventListener("click", stopDogWalk);

// Adaugati un eveniment pe butonul Go Faster! si creati functia pentru a mari viteza de miscare a catelului.
var fasterBtn = document.getElementById("speed-button");

function goFaster() {
  window.clearTimeout(sesiune);
  window.clearInterval(dogTimer);
  delayMs = delayMs - 20;
  dogTimer = window.setInterval(dogWalk, delayMs);
  changeInfo(false);
  sesiune = window.setTimeout(alertFunction, 5000);
  document.getElementById("start-button").disabled = true;
}

fasterBtn.addEventListener("click", goFaster);

// Afisati in tag-ul identificat prin id-ul info viteza de miscare, calculata in pixeli pe secunda (Viteza: 300px/secunda).
function changeInfo(stop) {
  var infoDiv = document.getElementById("info");
  if(stop)
      viteza = 0;
  else
      var viteza = movePixels * (1000/delayMs) + ' pixeli/secunda';
  infoDiv.innerHTML = viteza;
}

// Creati dinamic butonul Reset speed cu id-ul reset-button.

var resetBtn = document.createElement('button');
resetBtn.setAttribute('id', 'reset-button');
resetBtn.innerHTML = "Reset";
document.getElementById("buttons").appendChild(resetBtn);


// Adaugati un eveniment pe butonul Reset speed si creati functia pentru a reseta viteza.
var resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", resetSpeed);

function resetSpeed() {
  window.clearTimeout(sesiune);
  window.clearInterval(dogTimer);
  delayMs = 50;
  dogTimer = window.setInterval(dogWalk, delayMs);
  changeInfo(false);
  sesiune = window.setTimeout(alertFunction, 5000);
  document.getElementById("start-button").disabled = true;
}

// Simulati functionalitatea de expirare a sesiunii astfel incat dupa 30 secunde de inactivitate (nu a fost apasat niciun buton) sa fie afisata o alerta cu mesajul "Sesiune expirata". Folositi functia setTimeout.
function alertFunction() {
  alert("Sesiune expirata!");
}

sesiune = window.setTimeout(alertFunction, 5000);

// object literal pattern -> startBtn.addEventListener("click", startDogWalk.bind(this);
