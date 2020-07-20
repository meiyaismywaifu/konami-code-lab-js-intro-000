const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() { // why wrap inside a function?
  var konamiCounter = 0;

  // event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    var key = event.key;
    if (key === codes[konamiCounter]){
      konamiCounter++;
    } else {
      konamiCounter = 0;
      alert("failed");
    }
  })

  if (konamiCounter === 10){
    konamiCounter = 0;
    alert("success");
  }

  // alert() congratulations if all ten keys are pressed in the right order
}
