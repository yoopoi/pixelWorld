import uiWindow from '../uimaster/uiWindow'
import uiItem from '../uimaster/uiItem'
// import uiItem from '../uimaster/uiItem'

export default class equipmentBar extends Phaser.GameObjects.Group{
    constructor(_scene){
        super(window.game)
        let rect = _scene.add.graphics();
        rect.alpha = 0.5;
        rect.fillStyle(0xffffff);
        rect.fillRect(50,950,1820,100);
        this.add(rect);
        for (let i = 0;i < 20;i++){
            let rect = _scene.add.graphics();
            rect.alpha = 0.5;
            rect.fillStyle(0xffffff);
            rect.fillRect(65 + i * 90,960,80,80);
            this.add(rect);
        }
        console.log(this);
        return this;
    }
}