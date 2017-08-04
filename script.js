window.onload = function() {
  console.log("DOM Ready!");
  var frame,
    flying = setInterval(frame, 5),
    elem = document.getElementById("animate"),
    position = 0;

  function flyingRocket() {
    if (position == 350) {
      clearInterval(flying);
    } else {
      position++;
      elem.style.top = position + 300;
      elem.style.left = position + 300;
    }

  }


}; // end ready function
