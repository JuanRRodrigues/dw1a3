
import { FighterState } from "../../src/constants/fighter.js";

export class Fighter {
    constructor(name, x, y, direction) {
        this.name = name;
        this.image = new Image();
        this.frame = new Map();
        this.position = { x, y };
        this.direction = direction;
        this.velocity = 0;
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};

        this.states = {
            [FighterState.WALK_FORWARD]: {
                init: this.handleWalkForwardInit.bind(this),
                update: this.handleWalkForwardState.bind(this),
            },
            [FighterState.WALK_BACKWARD]: {
                init: this.handleWalkBackwardsInit.bind(this),
                update: this.handleWalkBackwardsState.bind(this),
            },
        }

this.changeState(FighterState.WALK_BACKWARD)
}
    changeState(newState) {
        this.currentState = newState;
        this.animationFrame = 0;

        this.states[this.currentState].init();
    }

    handleWalkForwardInit() {
        this.velocity = 150 * this.direction;
    }

    handleWalkForwardState() {

    }

    handleWalkBackwardsInit() {
        this.velocity = -150 * this.direction;
    }

    handleWalkBackwardsState() {

    }

    updateStageContraints(context) {
        const WIDTH = 32;

        if (this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH;
        }

        if (this.position.x < WIDTH) {
            this.position.x = WIDTH;
        }
    }

    update(time, context) {
        if (time.previous > this.animationTimer + 110) {
            this.animationTimer = time.previous;

            this.animationFrame++;
            if (this.animationFrame > 6) this.animationFrame = 0;
        }

        this.position.x += this.velocity * time.secondsPassed;

        this.states[this.currentState].update(time, context);
        this.updateStageContraints(context);
    }

    drawDebug(context) {
        context.lineWidth = 1;

        context.beginPath();
        context.strokesStyle = 'white';
        context.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y));
        context.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
        context.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 4.5);
        context.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5);
        context.stroke();
    }

    draw(context) {
        const [
            [x, y, width, height],
            [originX, originY],
        ] = this.frames.get(this.animations[this.currentState][this.animationFrame]);

        context.scale(this.direction, 1);
        context.drawImage(
            this.image,
            x, y,
            width, height,
            Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY,
            width, height
        );

        context.setTransform(1, 0, 0, 1, 0, 0);
        this.drawDebug(context);
    }
}
