

function start() {
 console.log("DOM fully loaded and parsed");
    var hauteur = window.innerHeight;
  var largeur = window.innerWidth;

  
  function shuffle(){
      var shuffleContainers = document.getElementsByClassName('ShuffleMeContainer');
      console.log(shuffleContainers); // Add this line for debugging
      var i = 0;

      for (i = 0; i < shuffleContainers.length; i++) {
          shuffleDivs = shuffleContainers[i].getElementsByClassName('ShuffleMe');
          console.log(shuffleDivs); // Add this line for debugging
          suffleElements(shuffleDivs);
      }
      // after shuffle, remove d-none
      var allDivs = document.querySelectorAll('.ShuffleMe.d-none');
      for (var j = 0; j < allDivs.length; j++) {
          allDivs[j].classList.remove('d-none');
          allDivs[j].classList.add('fade-in');
      }
      shuffleContainers[0].classList.remove('d-none');
  }

  function suffleElements(divs){
      var i = 0;

      for (i = 0; i < divs.length -1; i++) {
          var anyNextIndex = i + Math.floor(Math.random() * (divs.length-i));
          var currentNode = divs[i];
          var anyNextElement = divs[anyNextIndex];
          SwapNodes(currentNode,anyNextElement);
      }
  }

  function SwapNodes(a,b){
      var afterA = a.nextSibling;
      a.parentNode.insertBefore(a,b);
      afterA.parentNode.insertBefore(b,afterA);
  }

  var slider = document.getElementById("myRange");
  if (slider) { // Check if slider is not null
      var output = document.getElementById("op");
      var opaciti = document.getElementById("textINFO");
      output.innerHTML = slider.value / 100.0; 

      slider.oninput = function() {
        var updated = this.value / 100;
        output.innerHTML = updated;
        opaciti.style.background = "rgba(205,205,205," + updated + ")";
      }
  }

  // calling the shuffle function after the DOM is fully loaded
  shuffle();

};

start();
