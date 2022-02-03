class Bird {

    constructor() {
        // aqui las propiedades de nuestro pollo
        this.x = 100;
        this.y = canvas.width / 2;
        this.width = 50;
        this.heigth = 50;
        this.img = new Image();
        this.img.src = "../images/flappy.png";
    };

    // los metodos de nuestro pollo

    drawBird = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
    };

    // necesitaremos movimiento
};

