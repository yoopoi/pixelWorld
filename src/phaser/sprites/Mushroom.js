import Phaser from 'phaser'
import Player from './Player'
export default class extends Player {
  constructor ({ scene, x, y, key , frame }) {
    super(scene,x,y,key,frame)

    this.cursors = scene.input.keyboard.createCursorKeys()
    return this;
  }

  update () {
    if (this.cursors.left.isDown){
      this.entity.setVelocityX(-this.speed);
  } else if (this.cursors.right.isDown){
    this.entity.setVelocityX(this.speed);
  } else {
    this.entity.setVelocityX(0);
  }
  if (this.cursors.up.isDown){
    this.entity.setVelocityY(-this.speed);
  } else if (this.cursors.down.isDown) {
    this.entity.setVelocityY(this.speed);
  } else {
    this.entity.setVelocityY(0);
  }
  }
}
