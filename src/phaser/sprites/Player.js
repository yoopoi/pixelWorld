export default class Player extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y,key = 'mushroom'){
      super(scene,x,y,key);
      this.setPosition(x,y);
      this.pos = {x,y};
      this._scene = scene;
      this.scene = scene;
      scene.add.displayList.add(this);
      scene.add.updateList.add(this);
      return this;
  }
}