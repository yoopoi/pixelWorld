import Phaser from 'phaser'
import Player from './Player'
export default class extends Phaser.TileSprite {
  constructor ({ game, x, y, width,height }) {
    super(game, x, y, width,height,"tileSheet",340)
    game.physics.enable(this,Phaser.Physics.ARCADE)
    this.body.collideWorldBounds = true;
    
    this.body.immovable=true;
    
  }

  update () {

}
}