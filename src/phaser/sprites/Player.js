export default class Player{
  constructor(scene,x,y,key = 'mushroom',option = {}){
      this._scene = scene;
      this._pos = {x,y};
      this.speed = option.speed ? option.speed : 300;
      this.playObj = this._scene.physics.add.sprite(x,y,key,0);
      this.playObj.setCollideWorldBounds(true)
      this._scene.physics.add.collider(this.playObj,this.scene)
  }
}
