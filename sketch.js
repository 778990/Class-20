var MX,FX;
function setup() {
  createCanvas(800,400);
  FX = createSprite(200, 200, 50, 80);
  FX.shapeColor = "green";
  FX.debug = true;

  MX = createSprite(400, 200, 80, 30);
  MX.shapeColor = "green";
  MX.debug = true;

}

function draw() {
  MX.x = mouseX;
  MX.y = mouseY;

  if(MX.x-FX.x < FX.width/2+MX.width/2 &&
    FX.x-MX.x < FX.width/2+MX.width/2 &&
    MX.y-FX.y < FX.height/2+MX.height/2 &&
    FX.y-MX.y < FX.height/2+MX.height/2){
    MX.shapeColor = "red";
    FX.shapeColor = "red";

  }
  else{
    MX.shapeColor = "green";
    FX.shapeColor = "green";

  }
  background(0);  
  drawSprites();
}