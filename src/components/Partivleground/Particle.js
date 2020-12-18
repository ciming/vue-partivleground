export default class Particle {
  constructor(parent) {
    this.parent = parent
    this.stackPos = null
    this.active = true
    this.layer = Math.ceil(Math.random() * 3);
    this.parallaxOffsetX = 0;
    this.parallaxOffsetY = 0;
    this.position = {
      x: Math.ceil(Math.random() * this.parent.canvas.width),
      y: Math.ceil(Math.random() * this.parent.canvas.height)
    }
    this.speed = {}
    switch (this.parent.options.directionX) {
      case 'left':
        this.speed.x = +(-this.parent.options.maxSpeedX + (Math.random() * this.parent.options.maxSpeedX) - this.parent.options.minSpeedX).toFixed(2);
        break;
      case 'right':
        this.speed.x = +((Math.random() * this.parent.options.maxSpeedX) + this.parent.options.minSpeedX).toFixed(2);
        break;
      default:
        this.speed.x = +((-this.parent.options.maxSpeedX / 2) + (Math.random() * this.parent.options.maxSpeedX)).toFixed(2);
        this.speed.x += this.speed.x > 0 ? this.parent.options.minSpeedX : -this.parent.options.minSpeedX;
        break;
    }
    switch (this.parent.options.directionY) {
      case 'up':
        this.speed.y = +(-this.parent.options.maxSpeedY + (Math.random() * this.parent.options.maxSpeedY) - this.parent.options.minSpeedY).toFixed(2);
        break;
      case 'down':
        this.speed.y = +((Math.random() * this.parent.options.maxSpeedY) + this.parent.options.minSpeedY).toFixed(2);
        break;
      default:
        this.speed.y = +((-this.parent.options.maxSpeedY / 2) + (Math.random() * this.parent.options.maxSpeedY)).toFixed(2);
        this.speed.x += this.speed.y > 0 ? this.parent.options.minSpeedY : -this.parent.options.minSpeedY;
        break;
    }
  }
  updatePosition() {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    let pointerX
    let pointerY
    
    if (this.parent.options.parallax) {
      if (this.parent.orientationSupport && !this.parent.isDesktop) {
        // Map tiltX range [-30,30] to range [0,winW]
        var ratioX = (winW - 0) / (30 - -30);
        pointerX = (this.parent.tiltX - -30) * ratioX + 0;
        // Map tiltY range [-30,30] to range [0,winH]
        var ratioY = (winH - 0) / (30 - -30);
        pointerY = (this.parent.tiltY - -30) * ratioY + 0;
      } else {
        pointerX = this.parent.mouseX;
        pointerY = this.parent.mouseY;
      }
      // Calculate parallax offsets
      this.parallaxTargX = (pointerX - (winW / 2)) / (this.parent.options.parallaxMultiplier * this.layer);
      this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10; // Easing equation
      this.parallaxTargY = (pointerY - (winH / 2)) / (this.parent.options.parallaxMultiplier * this.layer);
      this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10; // Easing equation
    }

    const elWidth = this.parent.$wrap.offsetWidth;
    const elHeight = this.parent.$wrap.offsetHeight;

    switch (this.parent.options.directionX) {
      case 'left':
        if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
          this.position.x = elWidth - this.parallaxOffsetX;
        }
        break;
      case 'right':
        if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth) {
          this.position.x = 0 - this.parallaxOffsetX;
        }
        break;
      default:
        // If particle has reached edge of canvas, reverse its direction
        if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth || this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
          this.speed.x = -this.speed.x;
        }
        break;
    }

    switch (this.parent.options.directionY) {
      case 'up':
        if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
          this.position.y = elHeight - this.parallaxOffsetY;
        }
        break;
      case 'down':
        if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight) {
          this.position.y = 0 - this.parallaxOffsetY;
        }
        break;
      default:
        // If particle has reached edge of canvas, reverse its direction
        if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight || this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
          this.speed.y = -this.speed.y;
        }
        break;
    }

    // Move particle
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
  draw() {
    this.parent.ctx.beginPath();
    this.parent.ctx.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, this.parent.options.particleRadius / 2, 0, Math.PI * 2, true);
    this.parent.ctx.closePath();
    this.parent.ctx.fill();

    // Draw lines
    this.parent.ctx.beginPath();
    // Iterate over all particles which are higher in the stack than this one
    for (var i = this.parent.particles.length - 1; i > this.stackPos; i--) {
      var p2 = this.parent.particles[i];

      // Pythagorus theorum to get distance between two points
      var a = this.position.x - p2.position.x
      var b = this.position.y - p2.position.y
      var dist = Math.sqrt((a * a) + (b * b)).toFixed(2);
      if (dist < this.parent.options.proximity) {
        this.parent.ctx.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY);
        if (this.parent.options.curvedLines) {
          this.parent.ctx.quadraticCurveTo(Math.max(p2.position.x, p2.position.x), Math.min(p2.position.y, p2.position.y), p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
        } else {
          this.parent.ctx.lineTo(p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
        }
      }
    }
    this.parent.ctx.stroke();
    this.parent.ctx.closePath();

  }
  setStackPos(i) {
    this.stackPos = i
  }
}
