
import Particle from './Particle'
export default class Partivleground{
  constructor($wrap, options ={}) {
    this.isDesktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)
    this.orientationSupport = !!window.DeviceOrientationEvent
    this.options = Object.assign({
      minSpeedX: 0.1,
      maxSpeedX: 0.7,
      minSpeedY: 0.1,
      maxSpeedY: 0.7,
      directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 10000, // How many particles will be generated: one particle every n pixels
      dotColor: '#666666',
      lineColor: '#666666',
      particleRadius: 7, // Dot size
      lineWidth: 1,
      curvedLines: false,
      proximity: 100, // How close two dots need to be before they join
      parallax: true,
      parallaxMultiplier: 5
    }, options)
    this.mouseX = 0
    this.mouseY = 0
    this.tiltX = 0
    this.tiltY = 0
    this.particles = []
    this.$wrap =  $wrap
    this.init()
  }
  init() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'vue-pg__canvas';
    this.canvas.style.display = 'block';
    this.$wrap.insertBefore(this.canvas, this.$wrap.firstChild);
    this.ctx = this.canvas.getContext('2d')
    this.styleCanvas()
    window.addEventListener('resize', () => {
      this.resizeHandler()
    })
    const numParticles = Math.round((this.canvas.width * this.canvas.height) / this.options.density);
    for (let i = 0; i < numParticles; i++) {
      const p = new Particle(this, {}, this);
      p.setStackPos(i);
      this.particles.push(p)
    }

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    }, false);

    if (this.orientationSupport && !this.isDesktop) {
      window.addEventListener('deviceorientation', (event) => {
          // Contrain tilt range to [-30,30]
          console.log(event);
          this.tiltY = Math.min(Math.max(-event.beta, -30), 30);
          this.tiltX = Math.min(Math.max(-event.gamma, -30), 30);
        }, true);
    }
    this.draw()
  }
  styleCanvas() {
    this.canvas.width = this.$wrap.offsetWidth;
    this.canvas.height = this.$wrap.offsetHeight;
    this.ctx.fillStyle = this.options.dotColor;
    this.ctx.strokeStyle = this.options.lineColor;
    this.ctx.lineWidth = this.options.lineWidth;
  }
  resizeHandler() {
    this.styleCanvas()
    for (var i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].position.x > this.canvas.width || this.particles[i].position.y > this.canvas.height) {
        this.particles.splice(i, 1);
      }
    }

    var numParticles = Math.round((this.canvas.width * this.canvas.height) / this.options.density);
    if (numParticles > this.particles.length) {
      while (numParticles > this.particles.length) {
        var p = new Particle(this, {}, this);
        this.particles.push(p);
      }
    } else if (numParticles < this.particles.length) {
      this.particles.splice(numParticles);
    }

    // Re-index particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].setStackPos(i);
    }
  }
  draw() {
    // // const winW = window.innerWidth;
    // // const winH = window.innerHeight;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].updatePosition();
    }
    // Draw particles
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(this.ctx, this.particles);
    }
    window.requestAnimationFrame(this.draw.bind(this))
  }
}