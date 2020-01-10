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
  document.getElementById("rectangle").onclick = drawRectangle;
  document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
  document.getElementById("triangle").onclick = drawTriangle;
  document.getElementById("smile").onclick = drawFace;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let canvas = document.getElementById('student-canvas-1');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  let message = prompt("Message: ");
  while (message.length >= 50) {
    alert("Your message is too long. Please keep your message under 50 characters.");
    message = prompt("Message: ");
  }
  ctx.font = '48px sans-serif';
  ctx.strokeText(message, 30, 70, 994);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {

  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var width = prompt("Width: ")
    if (width == null) {
      break;
    }
    if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.")

    }
    var height = prompt("Height: ")
    if (height == null) {
      break;
    }
    if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")

    }
    var x = prompt("X: ")
    if (x == null) {
      break;
    }
    if (x > 1024 || x < 1) {
      alert("Your x-coordinate must be between 1 and 1024.")

    }
    var y = prompt("Y: ")
    if (y == null) {
      break;
    }
    if (y > 512 || y < 1) {
      alert("Your y-coordinate must be between 1 and 512.")

    }
    if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
    var color = prompt("Color: ")
    color = String(color)
    var realColor = color.toLowerCase()
    if (realColor != "green" && realColor != "black" && realColor != "purple" && realColor != "orange" && realColor != "blue" && realColor != "yellow" && realColor != "red") {
      alert(color + " is not a supported color.")
    }
  } while (realColor != "green" && realColor != "black" && realColor != "purple" && realColor != "orange" && realColor != "blue" && realColor != "yellow" && realColor != "red")

  ctx.fillStyle = realColor;
  ctx.fillRect(10, 10, 100, 50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    const canvas = document.getElementById('student-canvas-4');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
    var a = prompt("Side 1: ")
    var b = prompt("Side 2: ")
    var c = prompt("Side 3: ")

    var height = Math.min (a, b, c)
    var hypotenuse = Math.max(a, b, c)
    var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

    if (base == 0 && height == 0 && hypotenuse == 0) {
      break;
    }
    a = Number(a)
    b = Number(b)
    c = Number(c)

    if (base*base + height*height != hypotenuse*hypotenuse || base == 0 || height == 0 || hypotenuse == 0  || a+b+c-hypotenuse-height != base) {
      alert("That's not a valid right triangle.")
    }
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert("One of your sides is not a number.")
    }
    if (base > 1024 || height > 512 || hypotenuse > 1310720) {
      alert("Your triangle won't fit on the canvas.")
    }
  }  while ((Math.floor(base)*Math.floor(base) + height*height != hypotenuse*hypotenuse) || isNaN(a) || isNaN(b) || isNaN(c) || base > 1024 || height > 512 || hypotenuse > 1310720 || base == 0 || height == 0 || hypotenuse == 0)

  if ((base*base + height*height == hypotenuse*hypotenuse) && (base < 1024 && height < 512 && hypotenuse < 1145) && (base != 0 && height != 0 && hypotenuse != 0) && (base != null && height != null && hypotenuse != null)) {
    height = height + 25
    base = base + 25
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, height);
    ctx.lineTo(base, height)
    ctx.lineTo(25, 25)
    ctx.stroke();

};

    /*
     * Exercise 5.
     */

    const drawFace = function() {

      const canvas = document.getElementById('student-canvas-5');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      do {
        var radius = Number(prompt("Radius: "))
        if (radius < 32) {
          alert("Your radius must be at least 32.")
        }
        if (radius == null) {
          break;
        }
        if (isNaN(radius)) {
          alert("Your radius is not a number.")
        }
        if (radius > 256) {
          alert("Your smiley face won't fit on the canvas.")
        }
      } while (radius < 32 || radius > 256 || isNaN(radius))

      var mouth = radius * 0.7
      var eyes = radius * 0.15

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(512, 256, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI );
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(512 + 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(512, 256, mouth,0, Math.PI);
      ctx.stroke();
      ctx.closePath();
    }

    /*
     * Exercise 6 (extra credit).
     */

    // const drawPyramid = function()
};
