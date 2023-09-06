function setup() {
    createCanvas(900, 900);
  background("white");
  }
  function draw() {
    
    stroke("black");
    fill("blue");
    
   if(mouseIsPressed){
     rect(mouseX, mouseY, 20, 20, 20);
  }
    
  }