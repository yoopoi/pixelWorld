export default class Wall {
  constructor (scene, x, y, width,height) {
    console.log(scene.physics.add.tileSprite)
    let entity = scene.physics.add.tileSprite(x,y,width,height,'textureSheet',448)
    entity.tileScaleX = 3;
    entity.tileScaleY = 3;
    entity._my = this;
    return entity;
  }

  update () {

}
}