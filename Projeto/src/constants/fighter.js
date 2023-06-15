import { FRAME_TIME } from "./game.js";

export const PUSH_FRICTION = 66;
export const FIGHTER_START_DISTANCE = 88;
export const FIGHTER_HURT_DELAY = 7 + 8;

export const FighterDirection = {
    LEFT: -1,
    RIGHT: 1,
};

export const FighterId = {
    LEONA: 'Leona',
    KYO: 'Kyo'
}

export const FighterAttackStrenght = {
LIGHT: 'light',
MEDIUM: 'medium',
HEAVY: 'heavy',
}

export const FighterHurtBox = {
    HEAD: 'head',
    BODY: 'body',
    FEET: 'feet',
};

export const FighterAttackBaseData = {
    [FighterAttackStrenght.LIGHT]: {
      score: 100,
      damage: 2,
      slide: {
        velocity: -12 * FRAME_TIME,
        friction: 1000,
      }
    },
    [FighterAttackStrenght.MEDIUM]: {
       score: 300,
        damage: 3,
        slide:{
            velocity: -13 * FRAME_TIME,
            friction: 900,
        }
      },
      [FighterAttackStrenght.HEAVY]: {
        score: 500,
        damage: 4,
        slide: {
            velocity: -14 * FRAME_TIME,
            friction: 800,

        },

   }

};

export const FighterAttackType = {
    PUNCH: 'punch',
    KICK: 'kick',
}

export const FighterState = {
    IDLE: 'idle',
    WALK_FORWARD: 'walk-forwards',
    WALK_BACKWARD: 'walk-backwards',
    JUMP_START: 'jump-start',
    JUMP_UP: 'jump-up',
    JUMP_FORWARD: 'jump-forwards',
    JUMP_BACKWARD: 'jump-backwards',
    JUMP_LAND: 'jump-land',
    CROUCH: 'crouch',
    CROUCH_DOWN: 'crouch-down',
    CROUCH_UP: 'crouch-up',
    IDLE_TURN: 'idle-turn',
    CROUCH_TURN: 'crouch-turn',
    LIGHT_PUNCH: 'light-punch',
    MEDIUM_PUNCH: 'medium-punch',
    HEAVY_PUNCH: 'heavy-punch',
    LIGHT_KICK: 'ligh-kick',
    MEDIUM_KICK:'medium-kick',
    HEAVY_KICK: 'heavy-kick',
    HURT_HEAD_LIGHT: 'hurt-head-light',
    HURT_HEAD_MEDIUM: 'hurt-head-medium',
    HURT_HEAD_HEAVY: 'hurt-head-heavy',
    HURT_BODY_LIGHT: 'hurt-body-light',
    HURT_BODY_MEDIUM: 'hurt-body-medium',
    HURT_BODY_HEAVY: 'hurt-body-heavy',
};

export const FrameDelay = {
    FREEZE: 0,
    TRANSITION: -2,
}

export const PushBox = {
    IDLE: [-20, 4, 40, 90],
    JUMP: [-20, 4, 40, 90],
    BEND: [-16, 58, 32, 58],
    CROUCH: [-16, 41, 32, 60],
};

export const HurtBox = {
    IDLE: [[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
    BACKWARD:[[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
    FORWARD:[[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
    JUMP: [[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
    BEND: [[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
    CROUCH: [[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
    PUNCH:[[-20, 18, 40, 55], [-10,  -3, 20, 21], [-20, 70, 40, 21]],
};

export const hurtStateValidFrom = [
    FighterState.IDLE, FighterState.WALK_BACKWARD, FighterState.WALK_FORWARD,
    FighterState.JUMP_LAND, FighterState.JUMP_START, FighterState.IDLE_TURN,
    FighterState.LIGHT_PUNCH, FighterState.MEDIUM_PUNCH, FighterState.HEAVY_PUNCH,
    FighterState.LIGHT_KICK, FighterState.MEDIUM_KICK, FighterState.HEAVY_KICK,
    FighterState.HURT_HEAD_LIGHT, FighterState.HURT_HEAD_MEDIUM, FighterState.HURT_HEAD_HEAVY,
    FighterState.HURT_BODY_LIGHT, FighterState.HURT_BODY_MEDIUM, FighterState.HURT_BODY_HEAVY,
];
