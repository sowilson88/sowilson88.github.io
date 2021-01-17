function problemOne(event) {

  const target = event.target;
  target.parentNode.removeChild(target);
  console.log(event);
}

let elementOne = document.querySelector('#remove-me')
elementOne.addEventListener('click', problemOne);

/* ---------------------------------------- */

function problemTwo(event) {
  const target = event.target;
  if(target.classList.contains("child")){
    target.parentNode.removeChild(target);
  }
}

let elementTwo = document.querySelector('#remove-my-children')
elementTwo.addEventListener('click', problemTwo);

/* ---------------------------------------- */


function problemThree(event) {

  const target = event.target;
  if(target.classList.contains("child")){
    target.parentNode.removeChild(target);
  }
}

let elementThree = document.querySelector('#remove-my-children-then-me')
elementThree.addEventListener('click', problemThree);

/* ---------------------------------------- */

function problemFour(event ) {

  const target = event.target;
  let newNode = document.createElement("div");
  newNode.className = 'child';
  let newText = document.createTextNode("New Child");
  newNode.appendChild(newText);
  target.appendChild(newNode);
}

let elementFour = document.querySelector("#add-children")
elementFour.addEventListener('click', problemFour);

/* ---------------------------------------- */

//function problemFive({target}) {

  //const  target01 = event.target;
  //target.parentNode.removeChild(target).appendChild(target);

//}

//let elementFive = document.querySelector("#to-the-back")
//elementFive.addEventListener('click', problemFive);
/* ---------------------------------------- */


function problemSix({target}) {

  const target01 = event.target;
  // your code here

}

// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

function problemSeven(event) {

  const target = event.target;
  // your code here


}

// reference the elment "#increment-decrement" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */


function problemEight(event) {

 const target = event.target;
  // your code here

}

// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:

/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

function problemNine(event) {

  event.preventDefault();
  const target = event.target;
  // your code here

}

// reference the elment "#paste-place" and add an eventlistener for the paste event:
// your code here:

/* ---------------------------------------- */

function problemTen(event) {
  const target = event.target;
  // your code here
}

// reference the elment "#show-hide" and add an eventlistener for the change event:
// your code here:

/* ---------------------------------------- */


function problemEleven( event ) {

  event.preventDefault();

  const target = event.target;
  // your code here

}

// your code here

/* ---------------------------------------- */

function problemTwelve ( ) {

    // your code here
}

// your code here
