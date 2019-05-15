  var monCanvas = document.getElementById('monCanvas');
  var ctx = monCanvas.getContext("2d");

  // création de mon rectangle de base

  ctx.fillStyle = '#45A651';
  ctx.fillRect(100, 50, 300, 100);
  ctx.fill();

  // je supprime 2 carrés sur la gauche et la droite

  ctx.clearRect(100, 50, 50, 50);
  ctx.clearRect(350, 50, 50, 50);

  // je créer la première roue

  ctx.beginPath();
  ctx.arc(150, 190, 40, 0, Math.PI * 2, true);
  ctx.strokeStyle = '#8E8E8E';
  ctx.stroke();
  ctx.fillStyle = '#CECECE';
  ctx.fill();

  // je créer la deuxième roue

  ctx.beginPath();
  ctx.arc(350, 190, 40, 0, Math.PI * 2, true);
  ctx.strokeStyle = '#8E8E8E';
  ctx.stroke();
  ctx.fillStyle = '#CECECE';
  ctx.fill();
