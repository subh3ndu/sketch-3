let ballA, ballB

function setup() {
  createCanvas(innerWidth, innerHeight)
  ballA = new Ball(width/2 - 200, height/2, 2)
  ballB = new Ball(width/2 + 200, height/2, 4)

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

  // text config
  textFont('Arial')
  textAlign(CENTER, CENTER)
  textSize(32)
  strokeWeight(1)
  text('Click to blow wind →', mouseX, mouseY)
}
