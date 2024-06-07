

function start() {
 console.log("DOM fully loaded and parsed");
    var hauteur = window.innerHeight;
  var largeur = window.innerWidth;

  
  function shuffle(){
      var shuffleContainers = document.getElementsByClassName('ShuffleMeContainer');
      var i = 0;

      for (i = 0; i < shuffleContainers.length; i++) {
          shuffleDivs = shuffleContainers[i].getElementsByClassName('ShuffleMe');
          suffleElements(shuffleDivs);
      }
      shuffleComplete = true; 
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
 // Mutation observer to watch for DOM changes and remove d-none after shuffling
 var observer = new MutationObserver(function (mutations) {
    if (shuffleComplete) {
      var allDivs = document.querySelectorAll('.ShuffleMe.d-none');
      for (var j = 0; j < allDivs.length; j++) {
        allDivs[j].classList.remove('d-none');
        allDivs[j].classList.add('fade-in');
      }
      var shuffleContainers = document.getElementsByClassName('ShuffleMeContainer');
      if (shuffleContainers.length > 0) {
        shuffleContainers[0].classList.remove('d-none');
      }
      observer.disconnect(); // Stop observing once done
    }
  });

  // Observe the entire document
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  // Calling the shuffle function after the DOM is fully loaded
  shuffle();
}

start();
