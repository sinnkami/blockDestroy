var canvas;
var context;

$(function () {
  var $window = $(window);
  canvas = $("#canvas");
  context = canvas[0].getContext("2d");
  var ball = new Ball(200, 100, 9, { x: 3, y: 3 }, 15);
  var bar = new Bar(30, 350, 50, 10, "rgb(28, 255, 0)", 5);
  var blocks = [];

  var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 79, 255)",
    "rgb(255, 0, 0)",
    "rgb(0, 79, 255)",
    "rgb(255, 0, 0)",
    "rgb(0, 79, 255)",
    "rgb(255, 0, 0)",
    "rgb(0, 79, 255)",
    "rgb(255, 0, 0)",
    "rgb(0, 79, 255)",
  ]

  for (var x = 0; x < 9; x++){
    blocks.push(new Block(30*x+(x*2)+7, 6, 30, 10, colors[x]));
  }
  for (var x = 1; x < 10; x++){
    blocks.push(new Block(30*(x-1)+((x-1)*2)+7, 18, 30, 10, colors[x]));
  }
  for (var x = 0; x < 9; x++){
    blocks.push(new Block(30*x+(x*2)+7, 30, 30, 10, colors[x]));
  }
  for (var x = 1; x < 10; x++){
    blocks.push(new Block(30*(x-1)+((x-1)*2)+7, 42, 30, 10, colors[x]));
  }
  for (var x = 0; x < 9; x++){
    blocks.push(new Block(30*x+(x*2)+7, 54, 30, 10, colors[x]));
  }

  var loop = setInterval(function () {
    context.clearRect(0, 0, canvas[0].width, canvas[0].height);

    context.fillStyle = "black";
    context.fillRect(0, 0, 5, canvas[0].height);
    context.fillRect(0, 0, canvas[0].width, 5);
    context.fillRect(canvas[0].width - 5, 0, 5, canvas[0].height);
    //context.fillRect(0, canvas[0].height - 5, canvas[0].width, 5);

    ball.move();
    ball.view();

    bar.key_event($window);
    bar.move();
    bar.view();
    bar.isHit(ball);

    for (var i = 0; i < blocks.length; i++){
      var result = blocks[i].isHit(ball);
      if (!result){
        blocks[i].view();
      }else {
        blocks.splice(i, 1);
      }
    }

    if (blocks.length == 0){
      clearInterval(loop);
      context.fillStyle = "black";
      context.font = "40px normal";
      context.fillText("GAME CLEAR!!", 45, 200);
    }

    if (ball.y > 400) {
      clearInterval(loop);
      context.fillStyle = "black";
      context.font = "40px normal";
      context.fillText("GAME OVER", 60, 200);
    }
  }, 1000/60);
})
