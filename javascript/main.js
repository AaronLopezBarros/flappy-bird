// * GLOBAL VARIABLES
let splashScreen = document.querySelector("#splash-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");


// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    // desaparecer el splash screen y aparecer canvas
    splashScreen.style.display = "none";
    canvas.style.display = "flex";

    // ejecutar mi juego
    let newGame = new Game()
    newGame.gameLoop()
};





// * ADD EVENT LISTENERS
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);




