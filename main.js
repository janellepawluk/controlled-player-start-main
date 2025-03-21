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

// Animation
function draw() {
  // Clear Frame
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Check for collisions
  if (playerY + 70 + speedY > cnv.height || playerY + speedY < 0) {
    speedY = 0;
  }

  if (playerX + 50 + speedX > cnv.width || playerX + speedX < 0) {
    speedX = 0;
  }

  // Move Player
  // += means "adding"
  playerX += speedX;
  playerY += speedY;

  // Draw Player
  ctx.drawImage(playerImg, playerX, playerY, 50, 70);

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
