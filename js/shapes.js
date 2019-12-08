window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
  const ctx = canvas.getContext('2d');
  
  let message = prompt("Message: ");
  while (message.length > 50) {
    alert("Your message is too long. Please keep your message under 50 characters.");
  } ctx.font = '48px sans-serif';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeText(message, 30, 70, 994);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    const canvas = document.getElementById('student-canvas-2');
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
   do {
     let width = prompt("Width: ")
     if (width > 1024 || width < 1) {
       alert("Your width must be between 1 and 1024.")
     } let height = prompt("Height: ")
     if (height > 512 || height < 1) {
       alert("Your height must be between 1 and 512.")
     } let x = prompt("X: ") 
    if (x > 1024 || x < 1) {
      alert("Your x-coordinate must be between 1 and 1024.")
    } let y = prompt("Y: ")
    if (y > 512 || y < 1) {
      alert("Your y-coordinate must be between 1 and 512.")
    } if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    }
   } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    const canvas = document.getElementById('student-canvas-3');
    const ctx = canvas.getContext('2d');

    do {
let color = prompt("Color: ")
let realColor = color.toUpperCase()
if (realColor != "green" && realColor != "black" && realColor != "purple" && realColor != "orange" && realColor != "blue" && realColor != "yellow" && realColor != "red") {
  alert(color + " is not a supported color.")
}
    } while (realColor != "green" && realColor != "black" && realColor != "purple" && realColor != "orange" && realColor != "blue" && realColor != "yellow" && realColor != "red")
    
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
