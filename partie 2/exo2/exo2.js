  var monCanvas = document.getElementById('monCanvas');
  var ctx = monCanvas.getContext("2d");

  ctx.beginPath();
  ctx.fillStyle ='#2D66FC';
  ctx.fillRect(25,10,350,350)

  ctx.beginPath();
  ctx.moveTo(160,150);
  ctx.quadraticCurveTo(200,60,240,160);
  ctx.fillStyle='#fff';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(80,180);
  ctx.quadraticCurveTo(200,100,320,180);
  ctx.moveTo(80,180);
  ctx.quadraticCurveTo(200,260,320,180);
  ctx.fillStyle='#e0e1f3';
  ctx.fill();
  ctx.closePath();
