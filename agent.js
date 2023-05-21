class Agent extends Vehicle{
    constructor(colorOne,
        colorTwo,
        colorThree,
        radius) {
    // sets initial position
    let x = Math.random() * (width - 1) + 1;
    let y = Math.random() * (height - 1) + 1;
    super(x,y);

    // colorOne = (Math.random() * 255);
    // colorTwo = (Math.random() * 255);
    // colorThree = (Math.random() * 255);

    this.colorOne = colorOne;
    this.colorTwo = colorTwo;
    this.colorThree = colorThree;
    this.radius = radius;
    }
}