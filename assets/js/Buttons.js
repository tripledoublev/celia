function showText() {
    var x = document.getElementById("textINFO");
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
  }
  
  function langSwap() {
    var y = document.getElementById("textINFOfr");
    var z = document.getElementById("textINFOen");
    if (y.style.display === "none") {
      y.style.display = "inline-block";
      z.style.display = "none";
    } else {
      y.style.display = "none";
      z.style.display = "inline-block";
    }
  }
  
  function buttonSwap() {
      var btn = document.getElementById("lgSwitch");
  
      if (btn.value == "Fr") {
          btn.value = "En";
          btn.innerHTML = "En";
      }
      else {
          btn.value = "Fr";
          btn.innerHTML = "Fr";
      }
  }
  