export const PUSH_FRICTION = 66;
export const FIGHTER_START_DISTANCE = 88;



export const FighterDirection = {
    LEFT: -1,
    RIGHT: 1,
};

export const FighterId = {
    LEONA: 'Leona',
    KYO: 'Kyo',
}

export const FighterAttackType = {
    PUNCH: 'punch',
    KICK: 'kick',
}

export const FighterState = {
    IDLE: 'idle',
    WALK_FORWARD: 'walkForwards',
    WALK_BACKWARD: 'walkBackwards',
    JUMP_START: 'jumpStart',
    JUMP_UP: 'jumpUp',
    JUMP_FORWARD: 'jumpForwards',
    JUMP_BACKWARD: 'jumpBackwards',
    JUMP_LAND: 'jumpLand',
    CROUCH: 'crouch',
    CROUCH_DOWN: 'crouchDown',
    CROUCH_UP: 'crouchUp',
    IDLE_TURN: 'idleTurn',
    CROUCH_TURN: 'crouchTurn',
    LIGHT_PUNCH: 'lightPunch',
    MEDIUM_PUNCH: 'mediumPunch',
    HEAVY_PUNCH: 'heavyPunch',
    LIGHT_KICK: 'lighKick',
    MEDIUM_KICK:'mediumKick',
    HEAVY_KICK: 'heavyKick',
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
