export class Stage {
    constructor() {
        this.image = document.querySelector('img[alt="mexicostage"]');
    }

    update() { }
    draw(context) {
        context.drawImage(this.image, 0, 0);
    }
}




