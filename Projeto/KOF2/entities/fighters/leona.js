import { FighterState } from '../../src/constants/fighter.js';
import { Fighter } from './fighter.js';

export class Leona extends Fighter {
    constructor(x, y, velocity) {
        super('Leona', x, y, velocity);

        this.image = document.querySelector('img[alt="leona"]');

        this.frames = new Map([
            // Move Forwards
            ['forwards-1', [[377, 297, 50, 115], [0, 0]]],
            ['forwards-2', [[448, 301, 42, 111], [0, 0]]],
            ['forwards-3', [[521, 301, 43, 111], [0, 0]]],
            ['forwards-4', [[594, 296, 46, 116], [0, 0]]],
            ['forwards-5', [[669, 293, 43, 119], [0, 0]]],
            ['forwards-6', [[741, 295, 46, 117], [0, 0]]],
            ['forwards-7', [[818, 296, 44, 116], [0, 0]]],


            // Move Backwards
            ['backwards-1', [[22, 301, 44, 111], [0, 0]]],
            ['backwards-2', [[84, 299, 46, 113], [0, 0]]],
            ['backwards-3', [[150, 296, 52, 116], [0, 0]]],
            ['backwards-4', [[225, 293, 49, 119], [0, 0]]],
            ['backwards-5', [[301, 295, 46, 117], [0, 0]]],
            ['backwards-6', [[741, 295, 46, 117], [0, 0]]],
            ['backwards-7', [[818, 296, 44, 116], [0, 0]]],
        ]);

        this.animations = {
            [FighterState.WALK_FORWARD]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7'],
            [FighterState.WALK_BACKWARD]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7',],
        };
    }
}


