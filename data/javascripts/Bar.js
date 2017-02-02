class Bar {
  constructor(x, y, width, height, color, speed) {
    this.x = x;
    this.y = y
    this.width = width;
    this.height = height;

    this.speed = speed;

    this.color = color;
    this.key = {
      right: false,
      left: false
    }
  }

  key_event($window) {
    $window.keydown((event) => {
      if (event.keyCode == 37){
        this.key.right = true;
      }else if (event.keyCode == 39) {
        this.key.left = true;
      }
    })
    $window.keyup((event) => {
      if (event.keyCode == 37){
        this.key.right = false;
      }else if (event.keyCode == 39) {
        this.key.left = false;
      }
    })
  }

  move() {
    if (this.key.right && this.x > 5) { this.x -= this.speed; }
    if (this.key.left && this.x < canvas[0].width - this.width - 5) { this.x += this.speed; }
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
