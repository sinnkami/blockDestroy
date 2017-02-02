class Ball {
  constructor(x, y, radius, speed, size) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.wall_size = size;

    this.speed = speed;
  }

  move() {
    this.x += this.speed.x;
    this.y += this.speed.y;
    if (this.x < 0 + this.wall_size || this.x > canvas[0].width - this.wall_size) { this.speed.x = -this.speed.x; }
    if (this.y < 0 + this.wall_size /*|| this.y > canvas[0].height - this.wall_size*/) { this.speed.y = -this.speed.y; }
  }

  view() {
    context.beginPath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.stroke();
  }
}
