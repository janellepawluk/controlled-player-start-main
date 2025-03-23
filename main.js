//Credit card prompt
let creditcard = prompt("Enter a fake credit card number");

if (creditcard >= 1111111111111111 && creditcard <= 9999999999999999) {
  document.getElementById("output").innerHTML =
    "Keep Mario safe from the flying squares! Use the arrow keys on your keyboard. Sorry, you can't play on your phone :( Have Fun Playing!";

  // Canvas Set Up
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.height = 400;
  cnv.width = 600;

  let playerImg = document.getElementById("player-img");
  let playerX = 300;
  let playerY = 200;
  let speedX = 0;
  let speedY = 0;

  // Define Squares
  //red
  let squareX = 300;
  let squareY = 200;
  let squareW = 50;
  let speed2X = 1;
  let speed2Y = 1;

  //purple
  let square2X = 300;
  let square2Y = 200;
  let square2W = 50;
  let speed3X = -2;
  let speed3Y = 1;

  //blue
  let square3X = 300;
  let square3Y = 200;
  let square3W = 50;
  let speed4X = 2;
  let speed4Y = -2;

  // Animation
  function draw() {
    // Clear Frame
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    //Check for collisions
    //Needs to happen before move player, have to add speed so man doesn't get stuck outside boarder
    if (playerY + 70 + speedY > cnv.height || playerY + speedY < 0) {
      speedY = 0;
    }

    if (playerX + 50 + speedX > cnv.width || playerX + speedX < 0) {
      speedX = 0;
    }

    if (squareY + squareW > cnv.height || squareY < 0) {
      speed2Y = speed2Y * -1;
    } else if (squareX + squareW > cnv.width || squareX < 0) {
      speed2X = speed2X * -1;
    }

    if (square2Y + square2W > cnv.height || square2Y < 0) {
      speed3Y = speed3Y * -1;
    } else if (square2X + square2W > cnv.width || square2X < 0) {
      speed3X = speed3X * -1;
    }

    if (square3Y + square3W > cnv.height || square3Y < 0) {
      speed4Y = speed4Y * -1;
    } else if (square3X + square3W > cnv.width || square3X < 0) {
      speed4X = speed4X * -1;
    }

    // Move Player & squares
    // += means "adding"
    playerX += speedX;
    playerY += speedY;

    squareX += speed2X;
    squareY += speed2Y;
    square2X += speed3X;
    square2Y += speed3Y;
    square3X += speed4X;
    square3Y += speed4Y;

    // Draw Player & squares
    ctx.drawImage(playerImg, playerX, playerY, 50, 70);
    ctx.fillStyle = "red";
    ctx.fillRect(squareX, squareY, squareW, squareW);
    ctx.fillStyle = "purple";
    ctx.fillRect(square2X, square2Y, square2W, square2W);
    ctx.fillStyle = "blue";
    ctx.fillRect(square3X, square3Y, square3W, square3W);

    requestAnimationFrame(draw);
  }
  draw();

  // Key Handlers
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      speedY = -2;
    } else if (event.code === "ArrowDown") {
      speedY = 2;
    } else if (event.code === "ArrowLeft") {
      speedX = -2;
    } else if (event.code === "ArrowRight") {
      speedX = 2;
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      speedY = 0;
    } else if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
      speedX = 0;
    }
  });
} else {
  alert("Not a valid credit card");
}
