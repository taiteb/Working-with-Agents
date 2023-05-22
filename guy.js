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
        // Guyradius += random(-0.4, 0.4);
        
        pop();
    }

   
}

let Guystroke = 4;
let Guyopacity = 125;
let Guyradius = (Math.random() * 10);