
export default class uiWindow extends Phaser.GameObjects.Group{
    constructor({scene,pos,size,style = {img:null,color:0x00000,alpha:0.4}}){
        super(window.game);
        this.pos = pos;
        this.size = size;
        this.style = style;
        this._scene = scene;
        this.draw();
        return this;
    }
    draw () {
        let rect = this._scene.add.graphics();
        if (!this.style.img){
            rect.alpha = this.style.alpha;
            rect.fillStyle(this.style.color);
            rect.fillRect(this.pos.x,this.pos.y,this.size.width,this.size.height);
        }
        return this;
    }
}