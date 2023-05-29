import { FighterState } from '../../src/constants/fighter.js';
import { Fighter } from './fighter.js';

export class Kyo extends Fighter {
    constructor(x, y, velocity) {
        super('Kyo', x, y, velocity);

        this.image = document.querySelector('img[alt="kyo"]');

        this.frames = new Map([
            // Move Forwards
            ['forwards-1', [[13, 138, 46, 109], [0, 0]]],
            ['forwards-2', [[78, 134, 46, 113], [0, 0]]],
            ['forwards-3', [[141, 131, 47, 116], [0, 0]]],
            ['forwards-4', [[206, 135, 51, 112], [0, 0]]],
            ['forwards-5', [[275, 136, 57, 111], [0, 0]]],
            ['forwards-6', [[13, 138, 46, 109], [0, 0]]],
            ['forwards-7', [[78, 134, 46, 113], [0, 0]]],

            // Move Backwards
            ['backwards-1', [[352, 139, 55, 108], [0, 0]]],
            ['backwards-2', [[423, 136, 47, 136], [0, 0]]],
            ['backwards-3', [[490, 132, 44, 115], [0, 0]]],
            ['backwards-4', [[555, 134, 42, 113], [0, 0]]],
            ['backwards-5', [[615, 138, 44, 109], [0, 0]]],
            ['backwards-6', [[683, 140, 56, 106], [0, 0]]],
            ['backwards-7', [[352, 139, 55, 108], [0, 0]]],

        ]);

        this.animations = {
            [FighterState.WALK_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7'],
            [FighterState.WALK_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7',],
        };
    }
}


