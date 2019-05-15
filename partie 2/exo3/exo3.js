  var monCanvas = document.getElementById('monCanvas');
  var ctx = monCanvas.getContext("2d");

// tête

ctx.beginPath();
ctx.arc(230,70,50,0,Math.PI*2,true);
ctx.fillStyle = "#976F15";
ctx.fill();

// oeil gauche

ctx.beginPath();
ctx.arc(210,50,10,0,Math.PI*2,true);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

// oeil droite

ctx.beginPath();
ctx.arc(250,50,10,0,Math.PI*2,true);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

// oeil gauche

ctx.beginPath();
ctx.arc(217,52,4,0,Math.PI*2,true);
ctx.fillStyle = "black";
ctx.fill();

// oeil droite

ctx.beginPath();
ctx.arc(243,52,4,0,Math.PI*2,true);
ctx.fillStyle = "black";
ctx.fill();

// Bouche

ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(250,80);
ctx.quadraticCurveTo(230,100,210,80);
ctx.stroke();
ctx.fill();

// bras

ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#976F15";
ctx.moveTo(100,110);
ctx.lineTo(350,110);
ctx.lineTo(350,140);
ctx.lineTo(100,140);
ctx.moveTo(100,110);
ctx.quadraticCurveTo(50,120,100,140);
ctx.moveTo(350,110);
ctx.quadraticCurveTo(400,120,350,140);
ctx.fill();

// jambe et corps

ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "#976F15";
ctx.moveTo(180,140);
ctx.lineTo(180,350);
ctx.lineTo(210,350);
ctx.lineTo(210,290);
ctx.lineTo(280,290);
ctx.moveTo(250,330);
ctx.moveTo(250,290);
ctx.lineTo(250,350);
ctx.lineTo(280,350);
ctx.lineTo(280,140);
ctx.lineTo(180,140);
ctx.moveTo(180,350);
ctx.quadraticCurveTo(190,380,210,350);
ctx.moveTo(280,350);
ctx.quadraticCurveTo(260,380,250,350);
ctx.fill();

//entre jambe

ctx.beginPath();
ctx.lineWidth = "3";
ctx.fillStyle = "white";
ctx.moveTo(250,290);
ctx.quadraticCurveTo(230,250,210,290);
ctx.fill();

// bouton1

ctx.beginPath();
ctx.arc(230,220,10,0,Math.PI*2,true);
ctx.strokeStyle = "#7A2976";
ctx.fillStyle = "#7A2976";
ctx.fill();

// bouton1

ctx.beginPath();
ctx.arc(230,180,10,0,Math.PI*2,true);
ctx.strokeStyle = "#7A2976";
ctx.fillStyle = "#7A2976";
ctx.fill();
