// * GLOBAL VARIABLES
let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // desaparecer el splash screen y aparecer canvas
  splashScreen.style.display = "none";
  canvas.style.display = "flex";

  // ejecutar mi juego
  newGame = new Game();
  newGame.gameLoop();
};

const restartGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display = "flex";

  newGame = new Game();
  newGame.gameLoop();
};

// * ADD EVENT LISTENERS
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

let restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", restartGame);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") newGame.bird.birdJump();
});
