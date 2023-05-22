class Guy extends Agent {
    constructor() {
        super(Guystroke,
            Guyopacity,
            Guyradius);
    }


    show() {
        push();
        translate(this.pos.x, this.pos.y);
        noFill();
        stroke(currentColor, (Guyopacity - random(90)));
        strokeWeight(Guystroke);
        circle(0, 0, this.radius);
        pop();
    }

    // I need a way to step through the arrays and set the rgb color values to them, then start a new colorRandomizer instance off the end point of those values


    

    
}

let Guystroke = 4;
let Guyopacity = 125;
let Guyradius = (Math.random() * 25);