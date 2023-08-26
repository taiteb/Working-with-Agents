// Outlining creation of objects
let donuts = [];
let initialDonuts = 7;
let newDonuts = 2;

// Defining color gradient list
let colorIndex = 0;
let targetColor;
let currentColor;
let colors = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(5, 5, 5);
  frameRate(30);
  // Making the objects
  for (let i = 0; i < initialDonuts; i++) {
    donuts.push(new Guy());
  }

  // Filling colors list with values
  for (let i = 0; i < colors.length; i++){
    colors[i][0] = random(90);
    colors[i][1] = random(90, 255);
    colors[i][2] = random(100, 255);
  }
  targetColor = color(colors[colorIndex][0],
    colors[colorIndex][1], colors[colorIndex][2]);
  currentColor = targetColor;
  
}


function draw() {
  // using lerp to determine shading change
  currentColor = lerpColor(currentColor, targetColor, 0.1);
  // background(currentColor);

  // drawing and updating the objects
  for (let i = 0; i < donuts.length; i++) {
    let d = donuts[i];
    d.wander();
    d.update();
    d.show();
    d.edges();
    d.radius += random(-0.8, 0.8);
  }
  // Updating current and projected color values
  if (frameCount % 35 === 0) {
    colorIndex = (colorIndex + 1) % colors.length;
    targetColor = color(colors[colorIndex][0],
        colors[colorIndex][1], colors[colorIndex][2]);
}
  // Resetting color values every 150 frames 
  if (frameCount % 150 === 0) {
    for (let i = 0; i < colors.length; i++){
      colors[i][0] = random(90);
      colors[i][1] = random(90, 255);
      colors[i][2] = random(100, 255);
    }
  }

  // click spawns two more 
  if (mouseIsPressed){
    //background(5,5,5);
    for (let i = 0; i < 2; i++) {
      donuts.push(new Guy());
    }
  }
  
}