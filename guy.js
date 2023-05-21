class Guy extends Agent {
    constructor() {
        super(GuycolorOne,
            GuycolorTwo,
            GuycolorThree,
            Guyradius);
    }


    show() {
        push();
        translate(this.pos.x, this.pos.y);
        fill(GuycolorOne, GuycolorTwo, GuycolorThree);
        strokeWeight(1);
        circle(0, 0, this.radius);
        pop();
    }

    // I need a way to step through the arrays and set the rgb color values to them, then start a new colorRandomizer instance off the end point of those values

    incrementColorTo(starter, ender, scale) {
        // Takes in a starting value, end value, and maps increment speed (scale of 1-100) to the gap between current and projected values, then outputs incrementation values as an array
        let returnColor = starter;
        // var interimValue = starter;
        let gradientArray = [];
        let incSpeed = ((0.1 * scale) * abs(starter - ender));
        if (starter > ender) {
            for (let i = starter; i > ender; i -= incSpeed) {
                returnColor -= incSpeed;
                gradientArray.push(returnColor);
            }
        }

        else if (starter < ender); {
            for (let i = starter; i < ender; i += incSpeed) {
                returnColor += incSpeed;
                gradientArray.push(returnColor);
            }
        }
        // console.log(starter, ender, scale)
        return gradientArray;
    }

    colorRandomizer() {
        // Takes r,g,b input values for current state, randomizes new values for each, uses incrementColorTo to generate arrays of increment values
        let r = [];
        let g = [];
        let b = [];

        let randCol1 = (Math.random() * 255);
        let randCol2 = (Math.random() * 255);
        let randCol3 = (Math.random() * 255);

        r = this.incrementColorTo(GuycolorOne, randCol1, 2);
        g = this.incrementColorTo(GuycolorTwo, randCol2, 2);
        b = this.incrementColorTo(GuycolorThree, randCol3, 2);

        // console.log(GuycolorOne, g, b);
        colorArray.push(r, g, b);

    }

    colorUpdate() {
        // // push();
        let newArray = [];
        newArray = this.colorRandomizer();
        let cycleLimit = colorArray[0].length;
        let colorTicker = 1;
        for (var i = 0; i < cycleLimit; i++); {
            GuycolorOne = colorArray[0][i];
            GuycolorTwo = colorArray[1][i];
            GuycolorThree = colorArray[2][i];
            colorTicker++;
        }
        // if (colorTicker = cycleLimit) {
        //     colorArray = [];
        //     colorTicker = 0;
        //     colorArray.push(this.colorRandomizer(this.GuycolorOne, this.GuycolorTwo, this.GuycolorThree));
        // }
        // console.log(colorArray);
        // console.log(GuycolorOne, GuycolorTwo, GuycolorThree);
        // pop();
    }
}

let GuycolorOne = (Math.random() * 255);
let GuycolorTwo = (Math.random() * 255);
let GuycolorThree = (Math.random() * 255);
let Guyradius = (Math.random() * 25);