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
    }

    if (konamiCounter === 10){
      konamiCounter = 0;
      alert("Hurray");
    }
  })
  // ...this was simple.
  // maybe wouldn't have been if i wasn't told "start with (line 18)".
}
