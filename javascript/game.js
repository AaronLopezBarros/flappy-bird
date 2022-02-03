class Game {

    constructor() {
        // todas nuestras propiedades del juego
        this.bg = new Image();
        this.bg.src = "./images/bg.png";
    };

    // . todos nuestros metodos del juego
    gameLoop = () => {
        console.log("el juego funciona! YAY")
        // 1. limpiar el canvas

        // 2. dibujar los elementos

        // 3. mover los elemntos

        // 4. la recursión para la animación
        requestAnimationFrame(this.gameLoop);
    };
};