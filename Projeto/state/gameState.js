import { FighterId } from "../src/constants/fighter.js";
import { createDefaultFighterState } from "./fighterState.js";


export const gameState = {
    fighters: [
        createDefaultFighterState(FighterId.LEONA),
        createDefaultFighterState(FighterId.KYO)
    ],
};
