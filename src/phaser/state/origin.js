import Wall from '../components/wall';  
import Player from '../sprites/Player';   
import EquipmentBar from '../components/equipmentBar'
import Mushroom from '../sprites/Mushroom';

var Origin = new Phaser.Class({
    Extends: Phaser.Scene,

    init: function (data) {
    },
    preload:function(){
    this.load.spritesheet('textureSheet', require('../img/colored_transparent.png'),{ frameWidth: 16, frameHeight: 16,spacing:1 });
    this.load.image('mushroom', require('../img/mushroom.png'));
    console.log(this.load)
    this.load.tilemapCSV('originMap', require('../map/origin.csv'));
    },
    create:function(){
        //this.add.tilemap('textureSheet',0,0,1920,1080);
        //let bkg = new uiWindow({scene:this,pos:{x:50,y:950},size:{width:1820,height:100},style:{img:null,color:0xffffff,alpha:0.5}});
        //new uiItem({scene:this,pos:{x:50,y:50},style:{img:'star'}});
        let toolBar = new EquipmentBar(this);
        this.mushroom = new Mushroom({scene:this,x:300,y:500,key:'textureSheet',frame:30});
        this.player = this.mushroom.entity;
        this.player.setBounce(0.2)
        this.enemyGroup = this.physics.add.staticGroup();
        for (let i = 0;i < 20;i++){
            this.enemyGroup.create(Math.random() * 1920, Math.random() * 1920,'textureSheet',33).setScale(2,2)
            //this.enemyGroup.add(new Wall(this,Math.random() * 1920, Math.random() * 1920,'textureSheet',33))
        }
        
        this.physics.add.collider(this.player,this.enemyGroup,function(){
            console.log('crash!');
        });
        // for (let i = 0;i < 20;i++){
        //     let _wall = new Wall({scene:this,x:Math.random() * 1920,y:Math.random() * 1080,width:Math.random() * 200 + 10,height:Math.random() * 500 + 20});
        // }
        // let stars = this.physics.add.group({
        //     key : 'mushroom',
        //     repeat : 11,
        //     setXY : {x: Math.random() * 1920,y: Math.random() * 1080,stepX:70}
        //   })
        //   stars.children.iterate(function(child){
        //     //设置一下碰撞效果
        //     child.setBounceY(Phaser.Math.FloatBetween(0.4,0.8))
        //   })
     
        //   this.physics.add.collider(stars,this)
        //   this.physics.add.overlap(this.player,stars,function (){ console.log('crash'); },null,this)
    },
    update:function(){
        this.mushroom.update();
    }
});
export default Origin