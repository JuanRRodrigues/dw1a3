import{Fighter} from './Fighter.js'

export class Leona extends Fighter{
    constructor(x, y, velocity){
        super('Leona', x, y, velocity);

        this.image = document.querySelector('img[alt="leona]');

        this.frames = new Map([
            ['forwards-1',[22,201,44,111]],
            ['forwards-2',[85,299,11,113]],
            ['forwards-3',[150,296,52,116]],
            ['forwards-4',[225,293,48,119]],
            ['forwards-5',[302,296,45,116]],
            ['forwards-6',[302,296,45,116]],
            ['forwards-7',[377,298,50,114]],
            ['forwards-8',[669,293,43,119]],
            ['forwards-9',[741,295,46,119]],
            ['forwards-10',[818,296,44,116]],
        ])
    }
}
