let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int (y);
}

function draw() {
  background("green");
  
  let distanceX
  let distanceY
  let distance
  distanciaX = mouseX - x
  distanciaY = mouseY - y
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY)
 circle (x, y, 10);
  
  if(mouseX== x){
    text("Encontrei!", 200, 200);
    noLoop();
  }
    
    if(distancia>150){
    fill("blue")
    circle(mouseX, mouseY, distancia)
  }else if (distancia > 100){
    fill("purple")
    circle(mouseX, mouseY, distancia)
  } else if (distancia > 75){
    fill("orange")
    circle(mouseX, mouseY, distancia )
  }else if(distancia > 50){
    fill("red")
    circle(mouseX< mouseY, distancia)    
  }
   }