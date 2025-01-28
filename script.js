let ballA, ballB

function setup() {
  createCanvas(400, 400)
  ballA = new Ball(100, 200, 2)
  ballB = new Ball(300, 200, 4)
}

function draw() {
  background(0)

  if(mouseIsPressed) {
    let wind = createVector(0.1, 0)
    ballA.applyForce(wind)
    ballB.applyForce(wind)
  }

  let gravity = createVector(0, 0.2) ///  NOTE: acceleration due to gravity

  let weightA = p5.Vector.mult(gravity, ballA.mass) ///  NOTE: force(weight) due to mass
  let weightB = p5.Vector.mult(gravity, ballB.mass)
  ballA.applyForce(weightA)
  ballB.applyForce(weightB)

  ballA.update()
  ballA.edges()
  ballA.show()
  ballB.update()
  ballB.edges()
  ballB.show()
}
