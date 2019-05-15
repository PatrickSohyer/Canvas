  var monCanvas = document.getElementById('monCanvas');
  var ctx = monCanvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(100, 400);
  ctx.lineTo(300, 400);
  ctx.lineTo(300, 200);
  ctx.lineTo(300, 200);
  ctx.closePath();
  ctx.fillStyle = "#ADD8E6";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(125, 225);
  ctx.lineTo(125, 270);
  ctx.lineTo(165, 270);
  ctx.lineTo(165, 225);
  ctx.lineTo(125, 225);
  ctx.closePath();
  ctx.fillStyle = "#CACACA";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(225, 225);
  ctx.lineTo(225, 270);
  ctx.lineTo(265, 270);
  ctx.lineTo(265, 225);
  ctx.lineTo(225, 225);
  ctx.closePath();
  ctx.fillStyle = "#CACACA";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(175, 400 );
  ctx.lineTo(175, 330);
  ctx.lineTo(225, 330);
  ctx.lineTo(225, 500);
  ctx.closePath();
  ctx.fillStyle = "#CACACA";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 200 );
  ctx.lineTo(200, 100);
  ctx.lineTo(300, 200);
  ctx.closePath();
  ctx.fillStyle = "#CD853F";
  ctx.fill();
