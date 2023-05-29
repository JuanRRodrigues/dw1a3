import { KyoKusanagi } from '../entities/fighters/KyoKusanagi.js';
import { Leona } from '../entities/fighters/Leona.js';
import { Stage } from '../entities/stage.js';
import { FpsCounter } from '../entities/FpsCounter.js';


const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.addEventLsitener = ('load', function () {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const entities = [
        new Stage(),
        new KyoKusanagi(80,110, 150),
        new Leona(80, 110, -150),
        new FpsCounter(),
    ];


let frameTime = {
     previousTime: 0,
    secondsPassed: 0,
};



function frame(time) {
    window.requestAnimationFrame(frame);
    frameTime ={
        secondsPassed: (time - frameTime.previous) / 1000,
        previousTime: time,
    }



    for (const entity of entities){
        entity.update(frameTime, context);
    }
    for (const entity of entities){
        entity.draw(context)
    }


}

window.requestAnimationFrame(frame);

})
