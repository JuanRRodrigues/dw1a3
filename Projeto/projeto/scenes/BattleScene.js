import { Camera } from "../entities/fighters/overlays/Camera.js";
import { Leona } from "../entities/fighters/leona.js";
import { Kyo } from "../entities/fighters/kyo.js";
import { StatusBar } from "../entities/fighters/overlays/StatusBar.js";
import { FpsCounter } from "../entities/FpsCounter.js";
import { Stage } from "../entities/stage.js";
import { gameState } from "../state/gameState.js";
import { FighterId } from "../src/constants/fighter.js";
import { STAGE_MID_POINT, STAGE_PADDING } from "../src/constants/stage.js";


export class BattleScene {
    fighters = [];
    camera = undefined;
    entities = [];


    constructor() {
        this.stage = new Stage();

        this.overlays = [
            new StatusBar(this.fighters),
            new FpsCounter(),
        ];

        this.fighters = this.getFighterEntities();
        this.camera = new Camera(STAGE_MID_POINT + STAGE_PADDING - 192, 16, this.fighters);
    }

    getFighterEntitysClass(id) {
        switch (id) {
            case FighterId.LEONA:
                return Leona;
            case FighterId.KYO:
                return Kyo;
            default:
                throw new Error('Unimplemented fighter entity requested');
        }
    }

    getFighterEntity(fighterState, index) {
        const FighterEntityClass = this.getFighterEntitysClass(fighterState.id);

        return new FighterEntityClass(index);
    }



    getFighterEntities() {
        const fighterEntities = gameState.fighters.map(this.getFighterEntity.bind(this));

        fighterEntities[0].opponent = fighterEntities[1];
        fighterEntities[1].opponent = fighterEntities[0];

        return fighterEntities;
    }

    updateFighters(time, context) {
        for (const fighter of this.fighters) {
            fighter.update(time, context, this.camera);
        }
    }

    updateEntities(time, context) {
        for (const entities of this.entities) {
            entities.update(time, context, this.camera);
        }
    }
    updateOverlays(time, context) {
        for (const overlay of this.overlays) {
            overlay.update(time, context, this.camera);
        }
    }
    update(time, context) {
        this.updateFighters(time, context);
        this.stage.update(time);
        this.updateEntities(time, context);
        this.camera.update(time, context);
        this.updateOverlays(time, context);

    }
    drawFighters(context) {
        for (const fighter of this.fighters) {
            fighter.draw(context, this.camera);
        }
    }
    drawEntities(context) {
        for (const entity of this.entities) {
            entity.draw(context, this.camera);
        }
    }
    drawOverlays(context) {
        for (const overlay of this.overlays) {
            overlay.draw(context, this.camera);
        }
    }
    draw(context) {
        this.stage.draw(context, this.camera);
        this.drawFighters(context);
        this.drawEntities(context);
        this.drawOverlays(context);

    }
}

