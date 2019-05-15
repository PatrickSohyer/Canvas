var monCanvas = document.getElementById('monCanvas'); // Déclaration de ma variable et récupération de l'id de mon canvas
var ctx = monCanvas.getContext("2d"); // Déclaration de ma variable et je lance mon canvas en 2D

// Début de mon E

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(50, 100); // le début ce fera à largeur 50 et hauteur 100
ctx.lineTo(170, 100); // trait horizontal haut barre du haut E
ctx.lineTo(170, 115); // trait vertical barre du haut E
ctx.lineTo(62, 115); // trait horizontal bas barre du haut E
ctx.lineTo(50, 190); // trait vertical qui descend barre du milieu E
ctx.lineTo(145, 190); // trait horizontal haut barre du milieu E
ctx.lineTo(145, 205); // trait vertical barre du milieu E
ctx.lineTo(47, 205); // trait horizontal bas barre du milieu E
ctx.lineTo(32, 295); // trait vertical qui descend barre du bas E
ctx.lineTo(140, 295); // trait horizontal haut barre du bas E
ctx.lineTo(140, 310); // trait vertical barre du bas E
ctx.lineTo(15, 310); // trait horizontal bas barre du bas E
ctx.lineTo(50, 100); // trait reliant le bas du E et le haut
ctx.closePath(); // je ferme mon tracé
ctx.fillStyle = "#313131"; // choisis la couleur du remplissage de mon E
ctx.fill(); // remplissage de mon E

// Début de mon N

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(365, 90); // début largeur 365 et hauteur 90
ctx.lineTo(330, 305); // trait vertical gauche vers le bas
ctx.lineTo(345, 305); // trait horizontal bas gauche
ctx.lineTo(375, 120); // trait vertical gauch vers le haut intérieur
ctx.lineTo(470, 305); // trait diagonal bas
ctx.lineTo(480, 305); // trait horizontal bas droite
ctx.lineTo(520, 90); // trait vertical droite vers le haut extérieur
ctx.lineTo(505, 90); // trait horizontal haut
ctx.lineTo(470, 275); // trait vertical droite vers bas exterieur
ctx.lineTo(375, 90); // trait diagonal haut
ctx.lineTo(365, 90); // trait vertical haut gauche
ctx.closePath(); // fermeture de mon tracé
ctx.fillStyle = "#313131"; // choisis la couleur de mon N
ctx.fill(); // remplissage de mon N

// Début de mon 2

ctx.beginPath(); // Ouverture de mon tracé
ctx.strokeStyle = "#FFFFFF"; // choisis la couleur des lignes
ctx.fillStyle = "#EA4C19"; // choisis la couleur du remplissage
ctx.lineWidth = "2"; // choisis la taille des lignes
ctx.moveTo(135, 175); // début largeur 135 et hauteur 175
ctx.bezierCurveTo(215, -90, 670, 40, 85, 410); // forme haut et coté du 2 courbe de bezier
ctx.bezierCurveTo(190, 380, 245, 395, 245, 435); // forme qui permet de cacher le bas, courbe de bezier
ctx.bezierCurveTo(150, 440, 135, 445, 55, 465); // ajout forme bas qui gerera le coté bas du 2
ctx.bezierCurveTo(40, 470, 40, 470, 30, 460); // ligne diagonal qui gère le coté droit du 2
ctx.bezierCurveTo(20, 450, 15, 440, 10, 430); // finition 1 ligne 2
ctx.bezierCurveTo(5, 420, 5, 410, 15, 405); // finition 2 ligne 2
ctx.bezierCurveTo(430, 120, 325, 65, 300, 57); // arrondi du 2, et grand trait
ctx.bezierCurveTo(280, 50, 255, 60, 210, 130); // finiton 1 petit arrondi 2
ctx.bezierCurveTo(200, 140, 190, 180, 135, 175); // finition 2 petit arrondi 2
ctx.closePath(); // Fermeture de mon tracé
ctx.fill(); // remplissage
ctx.stroke(); // bordure

// Début des hexagones

// hexagones haut

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(635, 75); // début largeur 635 et hauteur 75
ctx.lineTo(663, 94); // coté haut droit
ctx.lineTo(661, 128); // coté droit
ctx.lineTo(631, 144); // coté bas droit
ctx.lineTo(604, 124); // coté bas gauche
ctx.lineTo(606, 91); // coté gauche
ctx.lineTo(635, 75); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#DBD7D6"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(602, 127); // début largeur 602 et hauteur 127
ctx.lineTo(628, 146); // coté haut droit
ctx.lineTo(626, 180); // coté droit
ctx.lineTo(596, 196); // coté bas droit
ctx.lineTo(569, 176); // coté bas gauche
ctx.lineTo(571, 143); // coté gauche
ctx.lineTo(602, 127); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#D2D1D1"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(666, 134); // début largeur 666 et hauteur 134
ctx.lineTo(692, 153); // coté haut droit
ctx.lineTo(690, 187); // coté droit
ctx.lineTo(660, 203); // coté bas droit
ctx.lineTo(633, 183); // coté bas gauche
ctx.lineTo(635, 150); // coté gauche
ctx.lineTo(666, 134); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#595656"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(626, 185); // début largeur 6626 et hauteur 185
ctx.lineTo(652, 204); // coté haut droit
ctx.lineTo(650, 238); // coté droit
ctx.lineTo(620, 254); // coté bas droit
ctx.lineTo(593, 234); // coté bas gauche
ctx.lineTo(595, 201); // coté gauche
ctx.lineTo(626, 185); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#EA4E23"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(590, 236); // début largeur 590 et hauteur 236
ctx.lineTo(616, 255); // coté haut droit
ctx.lineTo(614, 289); // coté droit
ctx.lineTo(584, 305); // coté bas droit
ctx.lineTo(557, 285); // coté bas gauche
ctx.lineTo(559, 252); // coté gauche
ctx.lineTo(590, 236); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#878787"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(652, 240); // début largeur 652 et hauteur 240
ctx.lineTo(678, 259); // coté haut droit
ctx.lineTo(676, 293); // coté droit
ctx.lineTo(646, 309); // coté bas droit
ctx.lineTo(619, 289); // coté bas gauche
ctx.lineTo(621, 256); // coté gauche
ctx.lineTo(652, 240); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#ECECEC"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(709, 165);  // début largeur 709 et hauteur 165
ctx.lineTo(720, 174); // coté haut droit
ctx.lineTo(719, 188); // coté droit
ctx.lineTo(708, 194); // coté bas droit
ctx.lineTo(696, 186); // coté bas gauche
ctx.lineTo(697, 172); // coté gauche
ctx.lineTo(709, 165); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#D2D1D1"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(734, 187); // début largeur 734 et hauteur 187
ctx.lineTo(744, 194); // coté haut droit
ctx.lineTo(743, 208); // coté droit
ctx.lineTo(732, 213); // coté bas droit
ctx.lineTo(722, 205); // coté bas gauche
ctx.lineTo(723, 194); // coté gauche
ctx.lineTo(734, 187); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#878787"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones

ctx.beginPath(); // Ouverture de mon tracé
ctx.moveTo(765, 178); // début largeur 765 et hauteur 178
ctx.lineTo(772, 182); // coté haut droit
ctx.lineTo(772, 190); // coté droit
ctx.lineTo(765, 194); // coté bas droit
ctx.lineTo(758, 190); // coté bas gauche
ctx.lineTo(758, 182); // coté gauche
ctx.lineTo(765, 178); // coté haut gauche
ctx.closePath(); // Fermeture de mon tracé
ctx.fillStyle = "#EA4C19"; // choisis la couleur de mon hexagones
ctx.fill(); // remplissage de l'Hexagones


// texte

var numericSchool = 'École du Numérique'; // déclare une variable texte
var noyonnais = 'du Noyonnais' // déclare une autre variable texte
ctx.font = "italic 3rem Arial"; // définis le style, la police et la taille du texte
ctx.fillStyle = "#595556"; // définis la couleur du texte
ctx.fillText(numericSchool, 330, 380); // choisis la position du texte haut
ctx.fillText(noyonnais, 325, 425); // choisis la position du texte bas
