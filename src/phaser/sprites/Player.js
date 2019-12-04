export default class Player{
  constructor(scene,x,y,key = 'mushroom',frame = 0,option = {}){
      this._scene = scene;
      this._pos = {x,y};
      this.speed = option.speed ? option.speed : 300;
      this.entity = this._scene.physics.add.sprite(x,y,key,frame);
      this.entity.scaleX = 3;
      this.entity.scaleY = 3;
      this.entity.setCollideWorldBounds(true)
      this._scene.physics.add.collider(this.entity,this.scene)
  }
}
