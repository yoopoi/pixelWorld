import fullScreen from './lib/fullScreen';
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
        this.scene.start('origin')
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
}

function create() {
    resize();
    this.scene.start('origin')
    // bgMusic = this.sound.add('bgMusic', {
    //     loop: true,
    //     delay: 2000
    // });
    // this.sound.play('bgMusic');
    // this.add.image(400, 300, 'sky');
    // platforms = this.physics.add.staticGroup();
    // platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    // platforms.create(600, 400, 'ground');
    // platforms.create(50, 250, 'ground');
    // platforms.create(750, 220, 'ground');

    // player = this.physics.add.sprite(100, 450, 'dude');
    // player.setBounce(0.2);
    // player.setCollideWorldBounds(true);

    // this.anims.create({
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('dude', {
    //         start: 0,
    //         end: 3,
    //     }),
    //     frameRate: 10,
    //     repeat: -1,
    // });

    // this.anims.create({
    //     key: 'turn',
    //     frames: [{
    //         key: 'dude',
    //         frame: 4,
    //     }],
    //     frameRate: 20,
    // });

    // this.anims.create({
    //     key: 'right',
    //     frames: this.anims.generateFrameNumbers('dude', {
    //         start: 5,
    //         end: 8,
    //     }),
    //     frameRate: 10,
    //     repeat: -1,
    // });

    // this.physics.add.collider(player, platforms);

    // cursors = this.input.keyboard.createCursorKeys();

    // stars = this.physics.add.group({
    //     key: 'star',
    //     repeat: 11,
    //     setXY: {
    //         x: 12,
    //         y: 0,
    //         stepX: 70,
    //     }
    // });
    // stars.children.iterate((child) => {
    //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    // });
    // this.physics.add.collider(stars, platforms);
    // this.physics.add.overlap(player, stars, collectStar, null, this);

    // scoreText = this.add.text(16, 16, 'score: 0', {
    //     fontSize: '32px',
    //     fill: '#000'
    // });

    // bombs = this.physics.add.group();
    // this.physics.add.collider(bombs, platforms);
    // this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update() {
    // if (cursors.left.isDown) {
    //     player.setVelocityX(-160);
    //     player.anims.play('left', true);
    // } else if (cursors.right.isDown) {
    //     player.setVelocityX(160);
    //     player.anims.play('right', true);
    // } else {
    //     player.setVelocityX(0);
    //     player.anims.play('turn');
    // }
    // if (cursors.up.isDown && player.body.touching.down) {
    //     player.setVelocityY(-330);
    // }
}

function collectStar(player, star) {
    star.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0) {
        stars.children.iterate((child) => {
            child.enableBody(true, child.x, 0, true, true);
        });
        createNewBomb();
    }
}

function hitBomb(player, bomb) {
    this.physics.pause();
    // webgl的着色方法1
    player.setTint(0xFF0000);
    /** webgl的着色方法2，加mask
     * let graphics = this.add.graphics();
     * graphics.fillStyle(0xFF0000);
     * graphics.fillRect(0, 0, 800, 600);
     * graphics.mask = new Phaser.Display.Mask(scene, player);
     * graphics.alpha = 0.6;
    */
    player.anims.play('turn');
    gameOver = true;
}

function createNewBomb() {
    let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    let bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
}

fullScreen.init();