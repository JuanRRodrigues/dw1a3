import { FighterState, PushBox, FrameDelay } from '../../src/constants/fighter.js';
import { Fighter } from './fighter.js';


export class Leona extends Fighter {
    constructor(playerId) {
        super(playerId);

        this.image = document.querySelector('img[alt="leona"]');

        this.frames = new Map([
            // Idle Stance

            //Mov
            ['idle-1', [[[21, 22, 69, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-2', [[[114, 22, 70, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-3', [[[202, 22, 70, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-4', [[[296, 24, 70, 107], [30, 4]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-5', [[[398, 22, 68, 119], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            //Stand 1
            ['idle-6', [[[520, 22, 75, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-7', [[[628, 21, 75, 110], [30, 7]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-8', [[[731, 25, 74, 106], [30, 3]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-9', [[[840, 22, 75, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-10', [[[942, 20, 76, 111], [30, 8]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-11', [[[1044, 19, 76, 112], [30, 9]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-12', [[[1149, 22, 76, 110], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-13', [[[1255, 22, 76, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],


            //Stand 2
            ['idle-19', [[[491, 164, 71, 107], [30, 4]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-20', [[[599, 160, 75, 110], [30, 7]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-21', [[[694, 160, 77, 110], [30, 7]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-22', [[[821, 161, 76, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-23', [[[921, 162, 76, 109], [30, 6]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-24', [[[1019, 161, 76, 110], [30, 7]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-25', [[[1125, 161, 76, 109], [30, 5]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],



            // Move Forwards
            ['forwards-1', [[[22, 301, 44, 111], [20, 9]], PushBox.IDLE]],
            ['forwards-2', [[[85, 299, 44, 113], [20, 10]], PushBox.IDLE]],
            ['forwards-3', [[[150, 296, 52, 116], [20, 11]], PushBox.IDLE]],
            ['forwards-4', [[[225, 293, 48, 119], [20, 11]], PushBox.IDLE]],
            ['forwards-5', [[[302, 295, 45, 116], [20, 10]], PushBox.IDLE]],
            ['forwards-6', [[[448, 302, 42, 110], [20, 11]], PushBox.IDLE]],
            ['forwards-7', [[[522, 301, 42, 111], [20, 12]], PushBox.IDLE]],
            ['forwards-8', [[[594, 297, 45, 115], [20, 15]], PushBox.IDLE]],
            ['forwards-9', [[[669, 293, 43, 119], [20, 17]], PushBox.IDLE]],
            ['forwards-10', [[[741, 295, 46, 117], [20, 17]], PushBox.IDLE]],
            ['forwards-11', [[[818, 296, 44, 116], [20, 17]], PushBox.IDLE]],





            // zove Backwards




            ['jump-up-1', [[[15, 752, 70, 93], [30, -15]], PushBox.JUMP]],
            ['jump-up-2', [[[112, 697, 31, 133], [30, 0]], PushBox.JUMP]],
            ['jump-up-3', [[[163, 711, 60, 101], [30, 0]], PushBox.JUMP]],
            ['jump-up-4', [[[249, 715, 60, 77], [30, 0]], PushBox.JUMP]],
            ['jump-up-5', [[[334, 712, 63, 53], [30, 0]], PushBox.JUMP]],
            ['jump-up-6', [[[423, 704, 83, 72], [30, 0]], PushBox.JUMP]],
            ['jump-up-7', [[[536, 707, 78, 91], [30, 0]], PushBox.JUMP]],
            ['jump-up-8', [[[622, 702, 86, 106], [30, 0]], PushBox.JUMP]],
            ['jump-up-9', [[[722, 716, 71, 82], [30, 0]], PushBox.JUMP]],
            ['jump-up-10', [[[811, 716, 45, 83], [30, 0]], PushBox.JUMP]],
            ['jump-up-11', [[[882, 740, 52, 38], [30, 0]], PushBox.JUMP]],
            ['jump-up-12', [[[952, 721, 54, 82], [30, 0]], PushBox.JUMP]],
            ['jump-up-13', [[[1026, 726, 77, 82], [30, 0]], PushBox.JUMP]],
            ['jump-up-14', [[[1132, 710, 65, 134], [30, 0]], PushBox.JUMP]],
            ['jump-up-15', [[[1229, 701, 32, 147], [30, 0]], PushBox.JUMP]],
            ['jump-up-16', [[[1092, 944, 53, 90], [30, -15]], PushBox.JUMP]],

            //JUMP FORWARD
            ['jump-roll-1', [[[12, 941, 70, 93], [50, 0]], PushBox.JUMP]],
            ['jump-roll-2', [[[109, 886, 31, 133], [50, 0]], PushBox.JUMP]],
            ['jump-roll-3', [[[186, 872, 65, 121], [50, 0]], PushBox.JUMP]],
            ['jump-roll-4', [[[261, 854, 102, 108], [50, 0]], PushBox.JUMP]],
            ['jump-roll-5', [[[376, 878, 115, 72], [50, 0]], PushBox.JUMP]],
            ['jump-roll-6', [[[502, 878, 118, 60], [50, 0]], PushBox.JUMP]],
            ['jump-roll-7', [[[631, 888, 117, 51], [50, 0]], PushBox.JUMP]],
            ['jump-roll-8', [[[758, 862, 116, 96], [50, 0]], PushBox.JUMP]],
            ['jump-roll-9', [[[887, 897, 94, 44], [50, 0]], PushBox.JUMP]],
            ['jump-roll-10', [[[1017, 884, 32, 147], [50, 0]], PushBox.JUMP]],
            ['jump-roll-11', [[[1092, 944, 53, 90], [50, 0]], PushBox.JUMP]],


            // Jump first/Last frame
            ['jump-land', [[[116, 1822, 48, 77], [20, -28]], PushBox.IDLE]],

            //Crunch
            ['crouch-1', [[[1255, 22, 76, 109], [20, 0]], PushBox.CROUCH]],
            ['crouch-2', [[[32, 1797, 62, 104], [20, 0]], PushBox.BEND]],
            ['crouch-3', [[[116, 1822, 48, 77], [20, -28]], PushBox.CROUCH]],

            //Stand Turn
            ['idle-turn-1', [[[686, 13, 59, 102], [0, 0]], PushBox.IDLE]],
            ['idle-turn-2', [[[767, 22, 52, 93], [0, 0]], PushBox.IDLE]],
            ['idle-turn-3', [[[837, 44, 59, 71], [0, 0]], PushBox.IDLE]],
            //Crouch Turn
            ['crouch-turn-1', [[[686, 13, 59, 102], [0, 0]], PushBox.CROUCH_TURN]],
            ['crouch-turn-2', [[[767, 22, 52, 93], [0, 0]], PushBox.CROUCH_TURN]],
            ['crouch-turn-3', [[[837, 44, 59, 71], [0, 0]], PushBox.CROUCH_TURN]],

            // Light Punch
            ['light-punch-1'[[[6, 770, 65, 103,], [0, 0]], PushBox.IDLE]],
            ['light-punch-2'[[[83, 771, 91, 102,], [0, 0]], PushBox.IDLE]],
            ['light-punch-3'[[[186, 770, 65, 103,], [0, 0]], PushBox.IDLE]],

        ]);

        this.animations = {
            [FighterState.IDLE]: [['idle-1', 100], ['idle-2', 100], ['idle-3', 100], ['idle-4', 100], ['idle-5', 100], ['idle-6', 80], ['idle-7', 80], ['idle-8', 80], ['idle-9', 80], ['idle-10', 80], ['idle-11', 80], ['idle-12', 80], ['idle-13', 80], ['idle-6', 80], ['idle-7', 80], ['idle-8', 80], ['idle-9', 80], ['idle-10', 80], ['idle-11', 80], ['idle-12', 80], ['idle-13', 80], ['idle-6', 80], ['idle-7', 80], ['idle-8', 80], ['idle-9', 80], ['idle-10', 80], ['idle-11', 80], ['idle-12', 80], ['idle-13', 80], ['idle-6', 80], ['idle-7', 80], ['idle-8', 80], ['idle-9', 80], ['idle-10', 80], ['idle-11', 80], ['idle-12', 80], ['idle-13', 80], ['idle-1', 100], ['idle-2', 100], ['idle-3', 100], ['idle-4', 100], ['idle-19', 800], ['idle-20', 100], ['idle-21', 100], ['idle-22', 100], ['idle-23', 100], ['idle-24', 100], ['idle-25', 800],],

            [FighterState.WALK_FORWARD]: [['forwards-1', 100], ['forwards-2', 100], ['forwards-3', 100], ['forwards-4', 100], ['forwards-5', 100], ['forwards-6', 100], ['forwards-7', 100], ['forwards-8', 100], ['forwards-9', 100], ['forwards-10', 100],],

            [FighterState.WALK_BACKWARD]: [['forwards-10', 100], ['forwards-9', 100], ['forwards-8', 100], ['forwards-7', 100], ['forwards-6', 100], ['forwards-5', 100], ['forwards-4', 100], ['forwards-3', 100], ['forwards-2', 100], ['forwards-1', 100],],

            [FighterState.JUMP_START]: [
                ['jump-land', 50], ['jump-land', FrameDelay.TRANSITION]
            ],

            [FighterState.JUMP_UP]: [['jump-up-2', 55], ['jump-up-3', 55], ['jump-up-4', 55], ['jump-up-5', 55], ['jump-up-6', 55], ['jump-up-7', 55], ['jump-up-8', 55], ['jump-up-9', 55], ['jump-up-10', 55], ['jump-up-11', 50], ['jump-up-12', 50], ['jump-up-13', 50], ['jump-up-14', 58], ['jump-up-15', 58], ['jump-up-16', FrameDelay.FREEZE]],



            [FighterState.JUMP_FORWARD]: [['jump-roll-1', 100], ['jump-roll-2', 100], ['jump-roll-3', 100], ['jump-roll-4', 100], ['jump-roll-5', 100], ['jump-roll-6', 100], ['jump-roll-7', 100], ['jump-roll-8', 100], ['jump-roll-9', 100], ['jump-roll-10', 100], ['jump-roll-11', 100],
            ],
            [FighterState.JUMP_BACKWARD]: [['jump-roll-11', 100], ['jump-roll-10', 100], ['jump-roll-9', 100], ['jump-roll-8', 100], ['jump-roll-7', 100], ['jump-roll-6', 100], ['jump-roll-5', 100], ['jump-roll-4', 100], ['jump-roll-3', 100], ['jump-roll-2', 100], ['jump-roll-1', FrameDelay.FREEZE],
            ],

            [FighterState.JUMP_LAND]: [
                ['jump-land', 50], ['jump-land', 120], ['jump-land', FrameDelay.TRANSITION]
            ],
            // yes
            [FighterState.CROUCH]: [['crouch-3', FrameDelay.FREEZE],
                //yes
            ],
            [FighterState.CROUCH_DOWN]: [['crouch-1', 30], ['crouch-2', 30], ['crouch-3', 30], ['crouch-3', -2]],

            //yes
            [FighterState.CROUCH_UP]: [['crouch-3', 30], ['crouch-2', 30], ['crouch-1', 30], ['crouch-1', -2],
            ],

            [FighterState.IDLE_TURN]: [['idle-turn-3', 30], ['idle-turn-2', 30], ['idle-turn-1', 30], ['idle-turn-1', FrameDelay.TRANSITION],
            ],

            [FighterState.CROUCH_TURN]: [['crouch-turn-3', 33], ['crouch-turn-2', 33], ['crouch-turn-1', 33], ['crouch-turn-1', FrameDelay.TRANSITION],
            ],
            [FighterState.LIGHT_PUNCH]: [['light-punch-1', 33], ['light-punch-2', 66], ['light-punch-3', 66, FrameDelay.TRANSITION]
            ],
        };

        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWARD]: 3 * 60,
                [FighterState.WALK_BACKWARD]: -(2 * 60),
                [FighterState.JUMP_FORWARD]: ((48 * 3) + (12 * 2)),
                [FighterState.JUMP_BACKWARD]: -((45 * 4) + (15 * 3)),


            },
            jump: -420,
        };

        this.gravity = 1000;
    }
}


