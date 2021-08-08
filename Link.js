class Link {
    constructor(bodyA, bodyB) {
        // Last link has the index of the last rectangle in the constraint
        var lastLink = bodyA.body.bodies.length - 2;

        var options = {
            bodyA: bodyA.body.bodies[lastLink],
            bodyB: bodyB,
            pointB: {x: 0, y: 0},
            length: -10,
            stiffness: 0.01,
        }

        this.con = Matter.Constraint.create(options);
        World.add(world, this.con)
    }
}