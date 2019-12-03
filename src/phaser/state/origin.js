import uiWindow from '../uimaster/uiWindow'
import EquipmentBar from '../components/equipmentBar'
//import Player from '../sprites/Player';
import Mushroom from '../sprites/Mushroom';
import uiItem from '../uimaster/uiItem'
var Origin = new Phaser.Class({
    Extends: Phaser.Scene,

    init: function (data) {
    },
    preload:function(){
        
    },
    create:function(){
        console.log(this.scene.backgroundColor = 0xffffff);
        //let bkg = new uiWindow({scene:this,pos:{x:50,y:950},size:{width:1820,height:100},style:{img:null,color:0xffffff,alpha:0.5}});
        //new uiItem({scene:this,pos:{x:50,y:50},style:{img:'star'}});
        let toolBar = new EquipmentBar(this);
        let mushroom = new Mushroom({scene:this,x:300,y:500,key:'mushroom'});
    },
    update:function(){
        
    }
});
export default Origin