import{Fighter} from './Fighter.js'

export class KyoKusanagi extends Fighter{
    constructor(x, y, velocity){
        super('KyoKusanagi', x, y, velocity);

        this.image = document.querySelector('img[alt="kyoKusanagi]');

        this.frames = new Map([
            ['forwards-1',[13,138,46,109]],
            ['forwards-2',[80,11,61,104]],
            ['forwards-3',[305,13,62,102]],
            ['forwards-4',[382,12,61,103]],
            ['forwards-5',[460,11,61,104]],

        ])
    }
}
