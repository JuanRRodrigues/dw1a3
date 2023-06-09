import { Camera } from "../entities/fighters/overlays/Camera.js";
import { Leona, Kyo } from "../entities/fighters/index.js";
import { StatusBar } from "../entities/fighters/overlays/StatusBar.js";
import { FpsCounter } from "../entities/FpsCounter.js";
import { Stage } from "../entities/stage.js";
import { gameState } from "../state/gameState.js";
import { FighterAttackBaseData, FighterAttackStrenght, FighterId } from "../src/constants/fighter.js";
import { STAGE_MID_POINT, STAGE_PADDING } from "../src/constants/stage.js";
import { LightHitSplash, MediumHitSplash, HeavyHitSplash } from "../entities/fighters/shared/index.js";



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

        this.starRound();
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

        return new FighterEntityClass(index, this.handleAttackHit.bind(this));
    }



    getFighterEntities() {
        const fighterEntities = gameState.fighters.map(this.getFighterEntity.bind(this));

        fighterEntities[0].opponent = fighterEntities[1];
        fighterEntities[1].opponent = fighterEntities[0];

        return fighterEntities;
    }

    starRound(){
        this.fighters = this.getFighterEntities();
        this.camera = new Camera(STAGE_MID_POINT + STAGE_PADDING - 192, 16, this.fighters);
    }
    updateFighters(time, context) {
        for (const fighter of this.fighters) {
            fighter.update(time, context, this.camera);
        }
    }
    handleAttackHit(playerId, opponentId, position, strength){
       gameState.fighters[playerId].score += FighterAttackBaseData[strength].score;
        gameState.fighters[opponentId].hitPoints -= FighterAttackBaseData[strength].damage;

        this.addEntity(this.getHitSplashClass(strength), position.x, position.y, playerId);
    }

    getHitSplashClass(strength){
        switch(strength){
            case FighterAttackStrenght.LIGHT:
                return LightHitSplash;
                case FighterAttackStrenght.MEDIUM:
                    return MediumHitSplash;
                    case FighterAttackStrenght.HEAVY:
                        return HeavyHitSplash;
                        default:
                            throw new Error('Unknown strength requested!');
        }
    }

    addEntity(EntityClass, ...args){
        this.entities.push(new EntityClass(...args, this.removeEntity.bind(this)));
    }

    removeEntity(entity){
        this.entities = this.entities.filter((thisEntity) => thisEntity !== entity);
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

