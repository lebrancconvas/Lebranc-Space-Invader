import { Howl } from 'howler';

export const audio = {
  bgm: new Howl({
    src: ['/assets/audio/bgm/ai_cyberpunk.mp3'],
    loop: true,
    volume: 0.7
  }),
  shoot: new Howl({
    src: ['/assets/audio/sfx/laser.wav'],
    volume: 0.5
  }),
  collide: new Howl({
    src: ['']
  })
};
