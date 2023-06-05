import { registerKeyBoardEvents } from './inputHandler.js';
import { getContext } from '../entities/utils/context.js';
import { BattleScene } from '../scenes/BattleScene.js';


export class TheKingOfFightersGame {
    context = getContext();

        frameTime = {
        previous: 0,
        secondsPassed: 0,
        };

    constructor() {
        this.scene = new BattleScene();
    }


    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time,
        };

        this.scene.update(this.frameTime, this.context);
        this.scene.draw(this.context);
    }

    start() {
        registerKeyBoardEvents();

        window.requestAnimationFrame(this.frame.bind(this));
    }
}
