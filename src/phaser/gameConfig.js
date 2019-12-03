 var defaultConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: '#aaa',
    // width: 9 * 64, // 576
    // height: 15 * 64, // 960
    parent: 'app',
   
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true,
        },
    },
};
export default defaultConfig