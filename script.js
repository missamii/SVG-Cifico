window.onload = function() {
  console.log("DOM Ready!");
  var frame;
  var flying = setInterval(frame, 5);
  var elem = document.getElementById("animate");
  var position = 0;

  function flyingRocket() {
    if (position == 350) {
      clearInterval(flying);
    } else {
      position++;
      elem.style.top = position + 'px';
      elem.style.left = position + 'px';
    }

  }


}; // end ready function
