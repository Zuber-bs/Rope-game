class Ground {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        var options = {
            isStatic: true,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, width, 30, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rect(pos.x, pos.y, width, 30);
    }
}