  var monCanvas = document.getElementById('monCanvas');
  var ctx = monCanvas.getContext("2d");

  function rotate(ctx, x) {
    ctx.rotate(x * Math.PI / 180);
    return ctx;
  }

  rotate(ctx, 45);
  ctx.fillStyle = "#CD853F";
  ctx.fillRect(235, -92, 141, 141);

  rotate(ctx, -45);
  ctx.fillStyle = "#ADD8E6";
  ctx.fillRect(131, 200, 200, 200);

  ctx.fillStyle = "#CACACA";
  ctx.fillRect(150, 220, 40, 40);
  ctx.fillRect(260, 220, 40, 40);

  ctx.fillStyle = "#CACACA";
  ctx.fillRect(200, 330, 50, 90);
