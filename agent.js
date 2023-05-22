class Agent extends Vehicle{
    constructor(stroke,
        opacity,
        radius) {
    // sets initial position
    let x = Math.random() * (width - 1) + 1;
    let y = Math.random() * (height - 1) + 1;
    super(x,y);

    // colorOne = (Math.random() * 255);
    // colorTwo = (Math.random() * 255);
    // colorThree = (Math.random() * 255);

    this.stroke = stroke;
    this.opacity = opacity;
    this.radius = radius;
    }
}