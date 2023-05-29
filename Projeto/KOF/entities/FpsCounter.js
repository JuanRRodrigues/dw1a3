export class FpsCounter {
    constructor(){
        this.fps = 0;
    }

    update(time){
        this.fps = Math.trunc(1 / secondsPassed);
    }

    draw(context) {
        context.font = "bold 20px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.fillStyle('FPS: ${this.fps}', context.canvas.width / 2, 30);
    }
}
