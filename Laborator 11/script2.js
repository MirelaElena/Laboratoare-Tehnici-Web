var dog = {
    movePixels: 10, // number of pixels
    delayMs: 50, // number of miliseconds
    dogTimer: null,
    sesiune: null,
    
    // Move the image on screen with 10px
    dogWalk: function() {
      var img = document.getElementsByTagName('img')[0];
      var currentLeft = parseInt(img.style.left);
      img.style.left = (currentLeft + dog.movePixels) + 'px';
      // reset image position to start
      if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
      }
    },
    
    // Call dogWalk function every 50 ms
    startDogWalk: function() {
      // delayMs = 50;
      clearTimeout(dog.sesiune);
      dog.dogTimer = window.setInterval(dog.dogWalk, dog.delayMs);
      dog.changeInfo(false);
      dog.sesiune = window.setTimeout(dog.alertFunction, 5000);
      document.getElementById("start-button").disabled = true;
    },
    
    
    // Adaugati un eveniment pe butonul Stop si creati functia pentru a opri miscarea catelului.
    stopDogWalk: function() {
      window.clearTimeout(dog.sesiune);
      window.clearInterval(dog.dogTimer);
      dog.changeInfo(true);
      dog.sesiune = window.setTimeout(dog.alertFunction, 5000);
      document.getElementById("start-button").disabled = false;
    },
    
  
    goFaster: function() {
      window.clearTimeout(dog.sesiune);
      window.clearInterval(dog.dogTimer);
      dog.delayMs =dog. delayMs - 20;
      dog.dogTimer = window.setInterval(dog.dogWalk, dog.delayMs);
      dog.changeInfo(false);
      dog.sesiune = window.setTimeout(dog.alertFunction, 5000);
      document.getElementById("start-button").disabled = true;
    },
    
    
    // Afisati in tag-ul identificat prin id-ul info viteza de miscare, calculata in pixeli pe secunda (Viteza: 300px/secunda).
    changeInfo: function(stop) {
      var infoDiv = document.getElementById("info");
      if(stop)
          viteza = 0;
      else
          var viteza = dog.movePixels * (1000/dog.delayMs) + ' pixeli/secunda';
      infoDiv.innerHTML = viteza;
    },
    
    // Creati dinamic butonul Reset speed cu id-ul reset-button.
    reset: function() {
    var resetBtn = document.createElement('button');
    resetBtn.setAttribute('id', 'reset-button');
    resetBtn.innerHTML = "Reset";
    document.getElementById("buttons").appendChild(resetBtn);
    },

    resetSpeed: function() {
      window.clearTimeout(dog.sesiune);
      window.clearInterval(dog.dogTimer);
      dog.delayMs = 50;
      dog.dogTimer = window.setInterval(dog.dogWalk, dog.delayMs);
      dog.changeInfo(false);
      dog.sesiune = window.setTimeout(dog.alertFunction, 5000);
      document.getElementById("start-button").disabled = true;
    },
    
    // Simulati functionalitatea de expirare a sesiunii astfel incat dupa 30 secunde de inactivitate (nu a fost apasat niciun buton) sa fie afisata o alerta cu mesajul "Sesiune expirata". Folositi functia setTimeout.
    alertFunction: function() {
      alert("Sesiune expirata!");
    },
    
    expirare: function(){
        dog.sesiune = window.setTimeout(dog.alertFunction, 5000);
    }
};

//start
var startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", dog.startDogWalk);

//stop
var stopBtn = document.getElementById("stop-button");
stopBtn.addEventListener("click", dog.stopDogWalk);


// faster
var fasterBtn = document.getElementById("speed-button");
fasterBtn.addEventListener("click", dog.goFaster);

//reset
dog.reset();
var resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", dog.resetSpeed);