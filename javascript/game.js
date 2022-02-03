class Game {
  constructor() {
    // todas nuestras propiedades del juego
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.bird = new Bird();
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // . todos nuestros metodos del juego
  gameLoop = () => {
    // 1. limpiar el canvas
    this.clearCanvas();
    // 2. mover los elemntos
    this.bird.birdGravity();

    // 3. dibujar los elementos
    this.drawBackground();
    this.bird.drawBird();
    // 4. la recursión para la animación
    requestAnimationFrame(this.gameLoop);
  };
}
