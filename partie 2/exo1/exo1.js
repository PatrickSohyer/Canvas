  var monCanvas = document.getElementById('monCanvas');
  var ctx = monCanvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(200,350);
  ctx.lineTo(250,200);
  ctx.lineTo(150,200);
  ctx.fillStyle = '#AA6522';
  ctx.fill();
  ctx.closePath();


  ctx.beginPath();
  ctx.moveTo(150,200);
  ctx.quadraticCurveTo(200,60,250,200);
  ctx.fillStyle='#8A0908';
  ctx.fill();
  ctx.closePath();
