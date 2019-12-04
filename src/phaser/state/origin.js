import Wall from '../sprites/wall';   
import EquipmentBar from '../components/equipmentBar'
import Mushroom from '../sprites/Mushroom';

var Origin = new Phaser.Class({
    Extends: Phaser.Scene,

    init: function (data) {
    },
    preload:function(){
    this.load.spritesheet('textureSheet', '../img/colored_transparent.png',{ frameWidth: 17, frameHeight: 16 });
    this.load.image('mushroom', require('../img/mushroom.png'));
    },
    create:function(){
        console.log(this.scene.backgroundColor = 0xffffff);
        //let bkg = new uiWindow({scene:this,pos:{x:50,y:950},size:{width:1820,height:100},style:{img:null,color:0xffffff,alpha:0.5}});
        //new uiItem({scene:this,pos:{x:50,y:50},style:{img:'star'}});
        let toolBar = new EquipmentBar(this);
        this.mushroom = new Mushroom({scene:this,x:300,y:500,key:'mushroom'});
        for (let i = 0;i < 100;i++){
            let _wall = new Wall({scene:this,x:Math.random() * 1920,y:Math.random() * 1080,width:Math.random() * 200 + 10,height:Math.random() * 500 + 20});
        }
    },
    update:function(){
        this.mushroom.update();
    }
});
export default Origin