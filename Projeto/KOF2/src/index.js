import { Kyo } from '../entities/fighters/kyo.js';
import { Leona } from '../entities/fighters/leona.js';
import { Stage } from '../entities/stage.js';
import { FpsCounter } from '../entities/FpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';
import { FighterDirection } from './constants/fighter.js';




window.addEventListener  ('load', function () {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');
    ConstantSourceNode.imageSmoothingEnabled = false;


    const entities = [
        new Stage(),
        new Leona(104, 130, FighterDirection.RIGHT),
        new Kyo (280, STAGE_FLOOR, FighterDirection.LEFT),
        new FpsCounter(),
    ];

    let frameTime = {
        previous: 0,
        secondsPassed: 0,
    };

    function frame(time) {
        window.requestAnimationFrame(frame);

        frameTime = {
            secondsPassed: (time - frameTime.previous) / 1000,
            previous: time,
        }

           for (const entity of entities) {
            entity.update(frameTime, context);
           }

           for (const entity of entities){
            entity.draw(context);
           }

        }

    window.requestAnimationFrame(frame);
});
