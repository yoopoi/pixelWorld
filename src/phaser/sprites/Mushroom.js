import Phaser from 'phaser'
import Player from './Player'
export default class extends Player {
  constructor ({ scene, x, y, key }) {
    super(scene,x,y,key)
    this.cursors = scene.input.keyboard.createCursorKeys()
    return this;
  }

  update () {
    if (this.cursors.left.isDown){
      this.playObj.setVelocityX(-this.speed);
  } else if (this.cursors.right.isDown){
    this.playObj.setVelocityX(this.speed);
  } else {
    this.playObj.setVelocityX(0);
  }
  if (this.cursors.up.isDown){
    this.playObj.setVelocityY(-this.speed);
  } else if (this.cursors.down.isDown) {
    this.playObj.setVelocityY(this.speed);
  } else {
    this.playObj.setVelocityY(0);
  }
  }
}
