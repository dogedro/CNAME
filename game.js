
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false

          }
        },
    scene: {
        preload: preload,
        create: create,
        update: update


    }
};

var game = new Phaser.Game(config);

function preload (){

         this.load.image('sky', 'assets/sky.png');
         this.load.spritesheet('player',
        'assets/sprite.png',
        { frameWidth: 32, frameHeight: 42 });
}
function create (){
  this.add.image(400, 300, 'sky');
this.player = this.physics.add.sprite(100, 450, 'player');

this.player.setBounce(0.2);
this.player.setCollideWorldBounds(true);



     this.anims.create({
         key: 'left',
         frames: this.anims.generateFrameNumbers('player', {frames: [1,2,3]}),
         frameRate: 10,
         repeat: -1
     });
     this.anims.create({
    key: 'turn',
    frames: [ { key: 'player', frame: 4 } ],
    frameRate: 10
});
     this.anims.create({
         key: 'right',
         frames: this.anims.generateFrameNumbers('player', { frames: [6,7,8]}),
         frameRate: 10,
         repeat: -1
     });
     this.anims.create({
         key: 'up',
         frames: this.anims.generateFrameNumbers('player', { frames: [12,13,14]}),
         frameRate: 10,
         repeat: -1
     });
     this.anims.create({
         key: 'down',
         frames: this.anims.generateFrameNumbers('player', { frames: [10,11] }),
         frameRate: 10,
         repeat: -1
     });



this.cursors = this.input.keyboard.createCursorKeys();
}
function update (){
  this.player.body.setVelocity(0);

    if (this.cursors.left.isDown)
    {
        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.anims.play('down', true);
    }
    else
    {
        this.player.anims.stop();
    }

     if (this.cursors.left.isDown)
     {
         this.player.body.setVelocityX(-80);
     }
     else if (this.cursors.right.isDown)
     {
         this.player.body.setVelocityX(80);
     }
     if (this.cursors.up.isDown)
     {
         this.player.body.setVelocityY(-80);
     }
     else if (this.cursors.down.isDown)
     {
         this.player.body.setVelocityY(80);

        }


}
