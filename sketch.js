var starImg,bgImg;
var star, starBody;
var fada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg  = loadImage    ("images/fairyImage1.png",
    "images/fairyImage2.png");
}

function setup() {
    createCanvas(800, 750);


    
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    fada = createSprite(350,600);
	fada.addImage(fadaImg);
	fada.scale = 0.2;
    
     
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	


}
function draw(){
background(bgImg);

star.velocityY = 4  
Engine.run(engine);
if(star.y > 470 && starBody.position.y > 470 ){
    Matter.Body.setStatic(starBody,true);
    }

   fada.x = mouseX; 
   

drawSprites();   
}
