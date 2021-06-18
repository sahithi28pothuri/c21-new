var bullet, wall;
var speed, weight;
var damage=0;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet  = createSprite(50, 200, 50, 50);
  bullet.shapeColor = color(24,23,20)


  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(124,123,20)

  speed = Math.round(random(223,335));
  weight = Math.round(random(32,52));
  thickness = Math.round(random(22,83));
}

function draw() {
  background(120,148,118);  
 
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
    //bullet.velocityX = 0;
    damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
    if(damage>10){
     wall.shapeColor = color(255,0,0);
      textSize(25);
      fill("red");
      text ("SafeFactor:"+"Highly risky",550,50);
      bullet.velocityX = 0;
    }

    else if(damage<180 && damage>100){
     wall.shapeColor = color(0,255,0);
      textSize(25);
      fill("brown");
      text ("SafeFactor:"+"slightly risky",550,50);
      bullet.velocityX = 0;
    }

    else if(damage<100){
      wall.shapeColor = color(0,0,255);
      textSize(25);
      fill("green");
      text ("SafeFactor:"+"Safe",550,50);
      bullet.velocityX = 0;
    }
  }

  textSize(25);
  fill("blue")
  text ("damage:"+round(damage),250,50);
 

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletrightedge = Lbullet.x + Lbullet.width;
  wallleftedge = Lwall.x;
  if(bulletrightedge>=wallleftedge){
    return true;
  }
  return false;

}