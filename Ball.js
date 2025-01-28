class Ball {
  constructor(x, y, m) {
    this.sw = 1
    this.mass = m
    this.r = sqrt(m) * 10 + this.sw
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
  }

  update() {
    // let mouse = createVector(mouseX, mouseY)
    // this.acc = p5.Vector.sub(mouse, this.pos)
    // this.acc.setMag(0.1)

    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0)
  }

  applyForce(force) { ///  NOTE: Newton's second law
    let f = p5.Vector.div(force, this.mass)
    this.acc.add(f)
  }

  edges() {
    if(this.pos.x + this.r >= width) {
      this.pos.x = width - this.r
      this.vel.x *= -1
    } else if (this.pos.x - this.r <= 0) {
      this.pos.x = this.r  
      this.vel.x *= -1
    }

    if(this.pos.y + this.r >= height) {
      this.pos.y = height - this.r
      this.vel.y *= -1
    }
  }

  show() {
    stroke(255)
    strokeWeight(this.sw)
    fill(255, 100)
    point(this.pos.x, this.pos.y)
    ellipse(this.pos.x, this.pos.y, this.r * 2)

    textFont('Brush Script MT')
    textSize(18)
    strokeWeight(1)
    stroke(0)
    fill(255)
    text(`mass = ${this.mass} units`, this.pos.x, this.pos.y - 2 * this.r)
  }
}
