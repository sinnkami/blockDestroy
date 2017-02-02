class Block {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.color = color;
  }

  isHit(ball) {
    if ((ball.x - ball.radius < this.x && ball.x + ball.radius > this.x + this.width)
    || (ball.x - ball.radius < this.x + this.width && ball.x + ball.radius > this.x)){
      if ((ball.y - ball.radius < this.y && ball.y + ball.radius > this.y + this.height)
      || (ball.y - ball.radius < this.y + this.height && ball.y + ball.radius > this.y)){
        ball.speed.y = -ball.speed.y;
        return true;
      }
    }

    return false;
  }

  view() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
