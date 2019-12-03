
export default class uiItem extends Phaser.GameObjects.Sprite{
    constructor({scene,pos,size,style = {img:null,color:0x00000,alpha:0.4}}){
        super(scene,pos.x,pos.y,style.img);
        this.setPosition(pos.x,pos.y);
        this.pos = pos;
        this.size = size;
        this.style = style;
        this._scene = scene;
        this.scene = scene;
        console.log(scene);
        scene.add.displayList.add(this);
        scene.add.updateList.add(this);
        return this;
    }
    drawBackground () {
    let rect = this._scene.add.graphics();
        if (!this.style.img){
            rect.alpha = this.style.alpha;
            rect.fillStyle(this.style.color);
            rect.fillRect(this.pos.x,this.pos.y,this.size.width,this.size.height);
        }
        console.log(this);
        return rect
    }
}