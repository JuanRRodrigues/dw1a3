import { FighterState, PushBox, FrameDelay, HurtBox } from '../../src/constants/fighter.js';
import { Fighter } from './fighter.js';


export class Kyo extends Fighter {
    constructor(playerId) {
        super(playerId);

        this.image = document.querySelector('img[alt="kyo"]');

        this.frames = new Map([
            // Idle Stance check

            ['idle-1', [[[10, 12, 59, 103], [28, 0]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-2', [[[80, 11, 61, 104], [28, 1]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-3', [[[153, 11, 61, 104], [28, 1]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-4', [[[229, 12, 62, 103], [28, 0]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-5', [[[305, 13, 62, 102], [28, -1]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-6', [[[382, 12, 61, 104], [28, 1]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-7', [[[460, 11, 61, 104], [28, 1]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-8', [[[536, 11, 61, 104], [28, 1]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-9', [[[610, 12, 60, 103], [28, 0]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],
            ['idle-10', [[[686, 13, 59, 102], [28, 0]], PushBox.IDLE, [[-20, 18, 40, 55], [-10, -3, 20, 21], [-20, 70, 40, 21]]]],


            // Move Forwards
            ['forwards-1', [[[13, 138, 46, 109], [20, 5]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-2', [[[78, 134, 46, 113], [20, 5]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-3', [[[141, 131, 47, 116], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-4', [[[206, 135, 51, 112], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-5', [[[275, 136, 57, 111], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-6', [[[352, 139, 55, 108], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-7', [[[423, 136, 47, 111], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-8', [[[490, 132, 44, 115], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-9', [[[555, 134, 42, 113], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-10', [[[615, 138, 44, 109], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],
            ['forwards-11', [[[683, 140, 56, 106], [20, 8]], PushBox.IDLE, HurtBox.FORWARD]],


            // Jump Up
            ['jump-up-1', [[[6, 482, 51, 80], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-up-2', [[[91, 426, 35, 146], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-up-3', [[[134, 441, 55, 110], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-up-4', [[[201, 444, 74, 100], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-up-5', [[[288, 445, 77, 86], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-up-6', [[[379, 449, 74, 101], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-up-7', [[[467, 448, 55, 111], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],

            //JUMP FORWARD
            ['jump-roll-1', [[[6, 652, 51, 80], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-2', [[[86, 593, 33, 141], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-3', [[[145, 600, 59, 98], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-4', [[[222, 586, 64, 45], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-5', [[[308, 583, 45, 65], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-6', [[[377, 596, 70, 55], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-7', [[[464, 592, 60, 95], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-8', [[[549, 596, 44, 123], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],
            ['jump-roll-9', [[[622, 653, 51, 80], [28, 0]], PushBox.JUMP, HurtBox.JUMP]],


            // Jump first/Last frame
            ['jump-land', [[[622, 653, 51, 80], [28, -20]], PushBox.IDLE, HurtBox.IDLE]],
            //Crunch
            ['crouch-1', [[[686, 13, 59, 102], [30, 0]], PushBox.IDLE, HurtBox.IDLE]],
            ['crouch-2', [[[767, 22, 52, 93], [30, 0]], PushBox.BEND, HurtBox.BEND]],
            ['crouch-3', [[[837, 44, 59, 71], [30, -35]], PushBox.CROUCH, HurtBox.CROUCH]],
            //Stand Turn
            ['idle-turn-1', [[[686, 13, 59, 102], [0, 0]], PushBox.IDLE, HurtBox.FORWARD]],
            ['idle-turn-2', [[[767, 22, 52, 93], [0, 0]], PushBox.IDLE, HurtBox.FORWARD]],
            ['idle-turn-3', [[[837, 44, 59, 71], [0, -35]], PushBox.IDLE, HurtBox.FORWARD]],

            //Crouch Turn
            ['crouch-turn-1', [[[686, 13, 59, 102], [0, 0]], PushBox.CROUCH_TURN]],
            ['crouch-turn-2', [[[767, 22, 52, 93], [0, 0]], PushBox.CROUCH_TURN]],
            ['crouch-turn-3', [[[837, 44, 59, 71], [0, -35]], PushBox.CROUCH_TURN]],

            // Light Punch
            ['light-punch-1', [[[6, 770, 65, 103,], [30, 0]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-punch-2', [[[83, 771, 91, 102,], [30, 0]], PushBox.IDLE, HurtBox.IDLE, [11, 6, 50, 18]]],
            ['light-punch-3', [[[186, 770, 65, 103,], [30, 0]], PushBox.IDLE, HurtBox.IDLE]],

            // MEDIUM Punch
            ['med-punch-1', [[[10, 915, 61, 104,], [30, 0]], PushBox.IDLE, HurtBox.IDLE]],
            ['med-punch-2', [[[91, 919, 58, 100,], [30, -4]], PushBox.IDLE, HurtBox.PUNCH]],
            ['med-punch-3', [[[169, 918, 60, 101,], [30, -4]], PushBox.IDLE, HurtBox.PUNCH]],
            ['med-punch-4', [[[240, 921, 106, 98,], [30, -5]], PushBox.IDLE, HurtBox.PUNCH, [25, 12, 50, 18]]],
            ['med-punch-5', [[[363, 916, 92, 103,], [30, -1]], PushBox.IDLE, HurtBox.PUNCH]],
            ['med-punch-6', [[[471, 915, 61, 104,], [30, 1]], PushBox.IDLE, HurtBox.PUNCH]],

            // heavy Punch
            ['heavy-punch-1', [[[12, 2703, 63, 101,], [32, 0]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-2', [[[91, 2703, 59, 101,], [35, -3]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-3', [[[167, 2709, 44, 95,], [33, -7]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-4', [[[225, 2715, 57, 89,], [36, -11]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-5', [[[302, 2716, 95, 88,], [40, -15]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-6', [[[411, 2717, 94, 87,], [40, -15]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-7', [[[523, 2714, 87, 90,], [43, -15]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-8', [[[635, 2711, 63, 93,], [30, -12]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-9', [[[718, 2713, 68, 91,], [23, -12]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-10', [[[800, 2720, 82, 84,], [22, -22]], PushBox.IDLE, HurtBox.PUNCH, [10, 20, 50, 18]]],
            ['heavy-punch-11', [[[893, 2719, 64, 85,], [20, -21]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-12', [[[975, 2720, 55, 84,], [19, -20]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-13', [[[1049, 2709, 50, 95,], [16, -9]], PushBox.IDLE, HurtBox.PUNCH]],
            ['heavy-punch-14', [[[1116, 2701, 45, 103,], [20, -1]], PushBox.IDLE, HurtBox.PUNCH]],

            // Light kick
            ['light-kick-1', [[[6, 770, 65, 103,], [25, -2]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-kick-2', [[[269, 764, 88, 109,], [39, 5]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-kick-3', [[[375, 767, 67, 106,], [10, 2]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-kick-4', [[[452, 767, 67, 106,], [5, 3]], PushBox.IDLE, HurtBox.PUNCH, [25, 19, 70, 20]]],
            ['light-kick-5', [[[535, 764, 104, 109,], [11, 7]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-kick-6', [[[665, 767, 67, 106,], [9, 2]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-kick-7', [[[750, 767, 67, 106,], [9, 2]], PushBox.IDLE, HurtBox.IDLE]],
            ['light-kick-8', [[[840, 770, 60, 103,], [25, -1]], PushBox.IDLE, HurtBox.IDLE]],

            // Ult
            ['special-1', [[[16, 4291, 47, 114,], [25, 10]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-2', [[[85, 4291, 65, 114,], [25, 10]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-3', [[[169, 4291, 65, 114,], [25, 10]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-4', [[[254, 4291, 67, 144,], [25, 10]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-5', [[[338, 4270, 73, 135,], [26, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-6', [[[432, 4269, 72, 136,], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-7', [[[524, 4270, 73, 134,], [26, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-8', [[[614, 4269, 73, 136,], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-9', [[[721, 4201, 120, 204,], [28, 99]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-10', [[[871, 4203, 164, 199,], [40, 94]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-11', [[[1059, 4254, 154, 147], [26, 42]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-12', [[[1253, 4202, 139, 199], [26, 94]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-13', [[[1416, 4196, 178, 205], [55, 100]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-14', [[[11, 4416, 186, 205], [55, 100]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-15', [[[230, 4425, 102, 196], [55, 91]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-16', [[[362, 4485, 73, 136], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-17', [[[541, 4485, 73, 136], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-18', [[[628, 4485, 73, 136], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-19', [[[720, 4485, 73, 136], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-20', [[[815, 4485, 73, 136], [27, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-21', [[[911, 4485, 72, 135], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-22', [[[1007, 4486, 73, 135], [26, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-23', [[[1099, 4485, 73, 137], [26, 31]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-24', [[[1219, 4527, 74, 94], [27, -10]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-25', [[[1306, 4525, 74, 96], [27, -10]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-26', [[[1398, 4488, 59, 133], [28, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-27', [[[1473, 4487, 59, 134], [28, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-28', [[[1540, 4500, 112, 121], [65, 16]], PushBox.IDLE, HurtBox.IDLE]],

            ['special-29', [[[5, 4658, 116, 116], [65, 12]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-30', [[[330, 4645, 175, 129], [64, 25]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-31', [[[520, 4645, 182, 129], [64, 25]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-32', [[[717, 4643, 182, 132], [64, 27]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-33', [[[910, 4640, 171, 134], [64, 30]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-34', [[[1090, 4640, 172, 134], [64, 30]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-35', [[[1276, 4641, 181, 133], [64, 29]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-36', [[[1467, 4641, 181, 133], [64, 29]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-37', [[[6, 4815, 181, 134], [65, 30]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-38', [[[199, 4815, 182, 134], [66, 30]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-39', [[[395, 4815, 181, 134], [65, 30]], PushBox.IDLE, HurtBox.PUNCH, [55, 18, 55, 55]]],
            ['special-40', [[[590, 4816, 181, 133], [65, 29]], PushBox.IDLE, HurtBox.IDLE]],

            ['special-41', [[[786, 4815, 180, 134], [64, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-42', [[[976, 4815, 180, 134], [64, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-43', [[[1168, 4815, 180, 134], [64, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-44', [[[1360, 4815, 181, 134], [65, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-45', [[[1558, 4815, 143, 134], [26, 30]], PushBox.IDLE, HurtBox.IDLE]],

            ['special-46', [[[31, 4995, 143, 134], [26, 30]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-47', [[[202, 4993, 146, 136], [29, 32]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-48', [[[370, 4993, 148, 137], [31, 33]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-49', [[[541, 4992, 147, 137], [31, 33]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-50', [[[709, 4991, 147, 138], [31, 34]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-51', [[[881, 4991, 146, 138], [31, 34]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-52', [[[1054, 4992, 136, 137], [31, 34]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-53', [[[1211, 4992, 134, 137], [31, 34]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-54', [[[1369, 4991, 131, 138], [31, 34]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-55', [[[1520, 4990, 66, 139], [31, 34]], PushBox.IDLE, HurtBox.IDLE]],
            ['special-56', [[[1618, 5026, 59, 103], [20, -2]], PushBox.IDLE, HurtBox.IDLE]],

        ]);
        this.animations = {
            //check IDLE - Yes - 10 Frames
            [FighterState.IDLE]: [['idle-1', 100], ['idle-2', 100], ['idle-3', 100], ['idle-4', 100],
            ['idle-5', 100], ['idle-6', 100], ['idle-7', 100], ['idle-8', 100], ['idle-9', 100], ['idle-10', 100],
            ],
            // check WALK_FORWARD - Yes - 6 Frames
            [FighterState.WALK_FORWARD]: [['forwards-1', 110], ['forwards-2', 110], ['forwards-3', 110],
            ['forwards-5', 110],
            ],
            // check WALK_BACKWARD - Yes - 6 Frames
            [FighterState.WALK_BACKWARD]: [['forwards-6', 110], ['forwards-7', 110], ['forwards-8', 110],
            ['forwards-9', 110], ['forwards-10', 110],
            ],
            [FighterState.JUMP_START]: [
                ['jump-land', 80], ['jump-land', FrameDelay.TRANSITION],
            ],



            // check JUMP_UP - Yes - 9 Frames
            [FighterState.JUMP_UP]: [['jump-up-1', 120], ['jump-up-2', 120], ['jump-up-3', 120], ['jump-up-4', 120], ['jump-up-5', 100], ['jump-up-6', 120], ['jump-up-7', 120], ['jump-up-2', 120], ['jump-up-1', 120],
            ],
            // check JUMP_UP - Yes - 9 Frames
            [FighterState.JUMP_FORWARD]: [['jump-roll-1', 110], ['jump-roll-2', 100], ['jump-roll-3', 100], ['jump-roll-4', 100], ['jump-roll-5', 100], ['jump-roll-6', 100], ['jump-roll-7', 100], ['jump-roll-8', FrameDelay.FREEZE],],

            [FighterState.JUMP_BACKWARD]: [['jump-roll-8', 105], ['jump-roll-7', 105], ['jump-roll-6', 95], ['jump-roll-5', 105], ['jump-roll-4', 105], ['jump-roll-3', 105], ['jump-roll-2', 105], ['jump-roll-1', FrameDelay.FREEZE]],

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
            [FighterState.LIGHT_PUNCH]: [['light-punch-1', 75], ['light-punch-2', 110], ['light-punch-3', FrameDelay.TRANSITION]],

            [FighterState.MEDIUM_PUNCH]: [['med-punch-1', 100], ['med-punch-2', 100], ['med-punch-3', 100], ['med-punch-4', 100], ['med-punch-5', 100], ['med-punch-6', FrameDelay.TRANSITION]],
            [FighterState.HEAVY_PUNCH]: [['heavy-punch-1', 75], ['heavy-punch-2', 75], ['heavy-punch-3', 75], ['heavy-punch-4', 75], ['heavy-punch-5', 75], ['heavy-punch-6', 75], ['heavy-punch-7', 75], ['heavy-punch-8', 75], ['heavy-punch-9', 75], ['heavy-punch-10', 75], ['heavy-punch-11', 75], ['heavy-punch-12', 75], ['heavy-punch-13', 75], ['heavy-punch-14', FrameDelay.TRANSITION]],

            [FighterState.LIGHT_KICK]: [['light-kick-1', 65], ['light-kick-2', 65], ['light-kick-3', 65], ['light-kick-4', 75], ['light-kick-5', 100], ['light-kick-6', 100], ['light-kick-7', 100], ['light-kick-8', FrameDelay.TRANSITION]],

            [FighterState.MEDIUM_KICK]: [['special-1', 75], ['special-2', 75], ['special-3', 75], ['special-4', 75], ['special-5', 75], ['special-6', 75,], ['special-7', 75], ['special-8', 75], ['special-9', 75], ['special-10', 75], ['special-10', 75], ['special-11', 75], ['special-12', 75], ['special-13', 75], ['special-14', 75], ['special-15', 75], ['special-16', 75], ['special-17', 75], ['special-18', 75], ['special-19', 75], ['special-20', 75], ['special-21', 75], ['special-22', 75], ['special-23', 75], ['special-24', 75], ['special-25', 75], ['special-26', 75], ['special-27', 75], ['special-28', 75], ['special-29', 75], ['special-30', 75], ['special-31', 75], ['special-32', 75], ['special-33', 75], ['special-34', 75], ['special-35', 75], ['special-36', 75], ['special-37', 75], ['special-38', 75], ['special-39', 75], ['special-40', 75], ['special-41', 75], ['special-42', 75], ['special-43', 75], ['special-44', 75], ['special-45', 75], ['special-46', 75], ['special-47', 75], ['special-48', 75], ['special-49', 75], ['special-50', 75], ['special-51', 75], ['special-52', 75], ['special-53', 75], ['special-54', 75], ['special-55', 75], ['special-56', FrameDelay.TRANSITION]],

        };


        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWARD]: 2 * 60,
                [FighterState.WALK_BACKWARD]: -(2 * 60),
                [FighterState.JUMP_FORWARD]: ((48 * 3) + (12 * 2)),
                [FighterState.JUMP_BACKWARD]: -((45 * 4) + (15 * 3)),

            },
            jump: -420,
        };

        this.gravity = 1000;
    }
}


