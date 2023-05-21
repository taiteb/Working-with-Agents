let donuts = [];
let initialDonuts = 17;
let colorArray = [];
let rColors = [];
let gColors = [];
let bColors = [];
colorArray = [rColors, gColors, bColors];

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(35, 35, 35);
  for (let i = 0; i < initialDonuts; i++){
    donuts.push(new Guy());
  }
}

function draw(){
  for (let i = 0; i < donuts.length; i ++){
    let d = donuts[i];
    d.wander();
    d.update();
    d.colorUpdate();
    d.show();
    d.edges();
  }
}



// incrementColorTo(starter, ender, scale) {
//   // Takes in a starting value, end value, and maps increment speed (scale of 1-100) to the gap between current and projected values, then outputs incrementation values as an array
//   var returnColor = starter;
//   //var interimValue = starter;
//   let gradientArray = [];
//   let incSpeed = map(scale, 0, 100, 0, abs(starter - ender));
//   if (starter > ender) {
//       for (i = starter; i > ender; i -= incSpeed) {
//           returnColor -= incSpeed;
//           gradientArray.push(returnColor);
//       }
//   }

//   else if (starter < ender); {
//       for (let i = starter; i < ender; i += incSpeed) {
//           returnColor += incSpeed;
//           gradientArray.push(returnColor);
//       }
//   }

//   return gradientArray;
// }

// colorRandomizer(rin, gin, bin) {
//   // Takes r,g,b input values for current state, randomizes new values for each, uses incrementColorTo to generate arrays of increment values
//   let r = [];
//   let g = [];
//   let b = [];

//   randCol1 = (Math.random() * 255);
//   randCol2 = (Math.random() * 255);
//   randCol3 = (Math.random() * 255);

//   r.push(this.incrementColorTo(rin, randCol1, 14));
//   g.push(this.incrementColorTo(gin, randCol2, 17));
//   b.push(this.incrementColorTo(bin, randCol3, 21));


//   return [[r], [g], [b]];

// }

// colorUpdate(){
//   let colorArray = [];
//   colorArray = this.colorRandomizer(this.colorOne, this.colorTwo, this.colorThree);
//   let cycleLimit = colorArray[0].length;
//   let colorTicker = 1; 
//   for (var i = 0; i < colorArray[0].length; i++);{
//       this.GuycolorOne = colorArray[0][i];
//       this.GuycolorTwo = colorArray[1][i];
//       this.GuycolorThree = colorArray[2][i];
//       colorTicker++
//   }
//   if (colorTicker = cycleLimit){
//       colorArray = [];
//       colorTicker = 0;
//       colorArray.push(this.colorRandomizer(this.GuycolorOne, this.GuycolorTwo, this.GuycolorThree));
//   }
//   console.log(GuycolorOne, GuycolorTwo, GuycolorThree);
// }