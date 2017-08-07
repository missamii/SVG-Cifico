// I have a SVG with two circles that are animated using @keyframes. I want to display the value of the circle's growth. Using javascript I want to display the value as a they shrink and grow. getTotalLength() is probably not what I should be using but am not sure of the name of what I am looking for that does size/value check.
// check for the correct JS method to solve this.
window.onload = function() {
  console.log("DOM Ready!");
  // get elements class names
  var redCircle = document.getElementsByClassName('red')[0];
  var greenCircle = document.getElementsByClassName('green')[0];

  // get elements id for value, so the label spans I created
  var redLabel = document.getElementById('red-grow');
  var greenLabel = document.getElementById('green-grow');

  function updateLabels() {
    var transformValue = getComputedStyle(redCircle).getPropertyValue('transform');
    getComputedStyle(greenCircle).getPropertyValue('transform');

    // transformValue a string | forming "matrix(1, 0, 0, 1, 0 ,0)"
    var currentScale = transformValue.match(/matrix\(([\d.]+)\,/)[1];

    redLabel.textContent = Math.round(currentScale * 133) + ': Red Circle Radius';
    greenLabel.textContent = Math.round(currentScale * 133) + ': Green Circle Radius';
    requestAnimationFrame(updateLabels);
  }
  requestAnimationFrame(updateLabels);
};
