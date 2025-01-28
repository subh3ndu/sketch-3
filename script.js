let ballA, ballB, ballC, ballD

function setup() {
  createCanvas(innerWidth, innerHeight)
  ballA = new Ball(width/2 - 200, height/2, 1)
  ballB = new Ball(width/2 - 100, height/2, 2)
  ballC = new Ball(width/2,       height/2, 4)
  ballD = new Ball(width/2 + 100, height/2, 8)
  ballE = new Ball(width/2 + 200, height/2, 16)
}

function draw() {
  background(0)

  if(mouseIsPressed) {
    let wind = createVector(0.1, 0)
    ballA.applyForce(wind)
    ballB.applyForce(wind)
    ballC.applyForce(wind)
    ballD.applyForce(wind)
    ballE.applyForce(wind)
  }


  let gravity = createVector(0, 0.2) ///  NOTE: acceleration due to gravity

  let weightA = p5.Vector.mult(gravity, ballA.mass) ///  NOTE: force(weight) due to mass
  let weightB = p5.Vector.mult(gravity, ballB.mass)
  let weightC = p5.Vector.mult(gravity, ballC.mass) ///  NOTE: force(weight) due to mass
  let weightD = p5.Vector.mult(gravity, ballD.mass)
  let weightE = p5.Vector.mult(gravity, ballE.mass)
  ballA.applyForce(weightA)
  ballB.applyForce(weightB)
  ballC.applyForce(weightC)
  ballD.applyForce(weightD)
  ballE.applyForce(weightE)

  ballA.update()
  ballA.edges()
  ballA.show()

  ballB.update()
  ballB.edges()
  ballB.show()

  ballC.update()
  ballC.edges()
  ballC.show()

  ballD.update()
  ballD.edges()
  ballD.show()

  ballE.update()
  ballE.edges()
  ballE.show()

  // text config
  textFont('Arial')
  textAlign(CENTER, CENTER)
  textSize(32)
  strokeWeight(1)
  text('Click to blow wind →', mouseX, mouseY)
}
