import './lib/index.scss'
import origin from './state/origin';
import config from './gameConfig'
console.log(config);
process.env.NODE_ENV !== 'production' && require('./index.html');

config.scene = {
    preload: preload,
    create: create,
    update: update,
};

//let game = new window.Phaser.Game(config);

class MyGame extends Phaser.Game{
    constructor(_config){
        super(_config);
        this.scene.add('origin', origin);
    }
}
window.game = new MyGame(config);
window.game.width = 1920;
window.game.height = 1080;
console.log(window.game)

window.addEventListener('resize', resize, false);
function resize() {
    var canvas = document.querySelector('canvas');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = window.game.config.width / window.game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + 'px';
        canvas.style.height = (windowWidth / gameRatio) + 'px';
    } else {
        canvas.style.width = (windowHeight * gameRatio) + 'px';
        canvas.style.height = windowHeight + 'px';
    }
}
let platforms;
let player;
let cursors;
let stars;
let score = 0;
let scoreText;
let bombs;
let gameOver;
let bgMusic;

function preload() {
    this.load.image('mushroom', require('./img/mushroom.png'));
    this.load.spritesheet('textureSheet', '../img/colored_transparent.png',{ frameWidth: 17, frameHeight: 16 });
}

function create() {
    resize();
    setTimeout(() => {
        this.scene.start('origin') 
},1000);
}

function update() {
}
