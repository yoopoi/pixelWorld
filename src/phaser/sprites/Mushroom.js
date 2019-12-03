import Phaser from 'phaser'
import Player from './Player'
export default class extends Player {
  constructor ({ scene, x, y, key }) {
    super(scene,x,y,key)
    // this.anchor.setTo(0.5)
    // this.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    // this.D = game.input.keyboard.addKey(Phaser.Keyboard.D);
    // this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
    // this.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    // this.speed = 300;
    // console.log(this);
    
    // game.physics.enable(this,Phaser.Physics.ARCADE)
    // this.body.collideWorldBounds = true;
    console.log(this);
    this.update = function(){
      alert();
    }
    return this;
  }

  update () {
    alert();
  }
}
