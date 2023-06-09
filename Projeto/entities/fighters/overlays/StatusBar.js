import {  HEALTH_DAMAGE_COLOR, HEALTH_MAX_HIT_POINTS, TIME_DELAY, TIME_FLASH_DELAY, TIME_FRAME_KEYS } from '../../../src/constants/battle.js';
import { gameState } from '../../../state/gameState.js';
import { drawFrame } from '../../utils/context.js';




export class StatusBar {
  constructor() {
    this.image = document.querySelector('img[alt="hud1"]');




    this.time = 99;
    this.timeTimer = 0;
    this.timeFlashTimer = 0;
    this.useFlashFrames = false;


this.healthBars = [{
  timer: 0,
  hitPoints: HEALTH_MAX_HIT_POINTS,
}, {
Timer:0,
hitPoints: HEALTH_MAX_HIT_POINTS,
}];


    this.frames = new Map([
      ['health-bar', [16, 18, 145, 11]],

      ['Versus', [161, 13, 32, 19]],

      [`${TIME_FRAME_KEYS[0]}-0`, [16, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-1`, [32, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-2`, [48, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-3`, [64, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-4`, [80, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-5`, [96, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-6`, [112, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-7`, [128, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-8`, [144, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-9`, [160, 32, 14, 16]],

      [`${TIME_FRAME_KEYS[1]}-0`, [16, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-1`, [32, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-2`, [48, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-3`, [64, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-4`, [80, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-5`, [96, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-6`, [112, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-7`, [128, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-8`, [144, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-9`, [160, 192, 14, 16]],

      // Name tags
      ['tag-kyo', [320, 31, 18, 25]],
      ['tag-leona', [297, 31, 18, 25]],
    ]);

    this.names = gameState.fighters.map(({ id }) => `tag-${id.toLowerCase()}`);
  }

  drawFrame(context, frameKey, x, y, direction = 1) {
    drawFrame(context, this.image, this.frames.get(frameKey), x, y, direction);
  }


  drawHealthBars(context) {
    this.drawFrame(context, 'health-bar', 61, 20);
    this.drawFrame(context, 'Versus', 206, 16);
    this.drawFrame(context, 'health-bar', 383, 20, -1);


    context.fillStyle = HEALTH_DAMAGE_COLOR;


    context.beginPath();
    context.fillRect(
      62, 21,
      HEALTH_MAX_HIT_POINTS - Math.floor(this.healthBars[0].hitPoints), 9,
    );

    context.fillRect(
238 + Math.floor(this.healthBars[1].hitPoints), 21,
HEALTH_MAX_HIT_POINTS - Math.floor(this.healthBars[1].hitPoints), 9,
    );
  }

  drawNameTags(context) {
    const [name1, name2] = this.names;
    this.drawFrame(context, name1, 32, 7,);
    this.drawFrame(context, name2, 391, 7,);
  }


  updateTime(time) {
    if (time.previous > this.timeTimer + TIME_DELAY) {
       this.time -= 1;
      this.timeTimer = time.previous;
    }

    if (
      this.time < 15 && this.time > -1
      && time.previous > this.timeFlashTimer + TIME_FLASH_DELAY
    ) {
      this.useFlashFrames = !this.useFlashFrames;
      this.timeFlashTimer = time.previous;
    }
  }

  updateHealthBars(time) {
  const FPS = 60;
   for(const index in this.healthBars){
    if(this.healthBars[index].hitPoints <= gameState.fighters[index].hitPoints) continue;
    this.healthBars[index].hitPoints = Math.max(0, this.healthBars[index].hitPoints - (time.secondsPassed * FPS));
   }
  }
  update(time) {
    this.updateTime(time);
    this.updateHealthBars(time);

  }
  drawTime(context) {
    const timesString = String(Math.max(this.time, 0)).padStart(2, '00');
    const flashFrame = TIME_FRAME_KEYS[Number(this.useFlashFrames)]

    this.drawFrame(context, `${flashFrame}-${timesString.charAt(0)}`, 210, 20);
    this.drawFrame(context, `${flashFrame}-${timesString.charAt(1)}`, 223, 20);
  }
  draw(context) {

    this.drawHealthBars(context);
    this.drawNameTags(context);
    this.drawTime(context);

  }

}
