window.onload = function() {
  console.log("DOM Ready!");


  // displaying each circle's value as they grow and shrink
  var redValue = document.getElementById('red-grow').innerHTML = span;
  // var greenValue = document.getElementById('green-grow').innerHTML =

  var redCircle = document.getElementsByClassName('red');
  var greenCircle = document.getElementsByClassName('green');
  var current = 0;
  var width = 0;
  var destination = 700;
  var friction = 0.04;

  // scaling up both circles
  function scaleUp() {
    //  console.log(scaleUp);
    current += (destination - current) * friction;
    redCircle[0].style.width = (current * 0.5 + 'px');
    greenCircle[0].style.width = (current * 0.5 + 'px');
    if (current >= destination - 0.1) {
      // clearInterval(redAnimate);
    }
  }
  var redAnimate = setInterval(scaleUp, 20);

  // scaling down both circles
  function scaleDown() {
    //console.log(redCircle[0].style, greenCircle[0].style);
    current += (destination - current) * friction;
    redCircle[0].style.width = (current * 0.5 + 'px');
    greenCircle[0].style.width = (current * 0.5 + 'px');
    if (current >= destination - 0.1) {
      // clearInterval(greenAnimate);
    }
  }
  var greenAnimate = setInterval(scaleDown, 20);
}; // end ready function
