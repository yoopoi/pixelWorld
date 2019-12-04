export default class Wall {
  constructor ({ scene, x, y, width,height }) {
    this.entity = scene.add.tileSprite(x,y,width,height,'textureSheet',45)
    return this;
  }

  update () {

}
}