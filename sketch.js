var cat,cat1,cat1IMG,cat2IMG;

var mouse,mouse1,mouse1IMG,mouse2IMG;

var ground,groundIMG;
function preload() {
    //load the images here

     cat1=loadImage("images/cat1.png");
    cat1IMG=loadAnimation("images/cat2.png","images/cat3.png");
     cat2IMG=loadImage("images/cat4.png");

     mouse1 =loadImage("images/mouse1.png");
    mouse1IMG=loadImage("images/mouse2.png","images/mouse3.png");
     mouse2IMG=loadImage("images/mouse4.png");

     ground=loadImage( "images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat=createSprite(870,600)
 cat.addAnimation("tomslepping",cat1)
 cat.scale=0.2;

 mouse=createSprite(200,600);
 mouse.addAnimation("jerrystanding",mouse1)
 mouse.scale=0.15
}

function draw() {

    background(ground);

if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{
cat.velocityX=0;
cat.addAnimation("tomlastimage,",cat2IMG)
cat.x=300
cat.scale=0.2
cat.changeAnimation("tomlastimage")
mouse.addAnimation("jerrylastimage",mouse2IMG)
mouse.scale=0.15
mouse.changeAnimation("jerrylastimage")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)

{

cat.velocityX=-5
cat.addAnimation("tomrunning",cat1IMG)
cat.changeAnimation("tomrunning")

mouse.addAnimation("jerryteasing",mouse1IMG)
mouse.frameDelay=25
mouse.changeAnimation("jerryteasing")
}





}
