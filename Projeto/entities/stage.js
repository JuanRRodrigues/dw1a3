import { drawFrame } from "./utils/context.js";



export class Stage {
    constructor() {
        this.image = document.querySelector('img[alt="mexicostage"]');


    this.frames = new Map([
        ['stage-background', [0,0,801,260]],
    ]);
}
    update() { }

    drawFrame(context, frameKey, x, y){
        drawFrame(context, this.image, this.frames.get(frameKey), x, y);
      }
    draw(context, camera) {
        this.drawFrame(context, 'stage-background', Math.floor(16 - (camera.position.x / 2.157303)), -camera.position.y);

    }


}


