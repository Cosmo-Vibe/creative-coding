let exerciceSelectionne = "Exercice 1";
let animaux = [],
  haut = [],
  milieu = [],
  bas = [],
  img;
let btnExercice1, btnExercice2, btnExercice3;

function preload() {
  // Exercice 1
  for (let i = 1; i <= 12; i++) {
    animaux.push(loadImage(`img/flou/${nf(i, 2)}.webp`));
  }

  // Exercice 2
  img = loadImage("img/space.jpg");

  // Exercice 3
  for (let i = 1; i <= 12; i++) {
    haut.push(loadImage(`img/haut/${nf(i, 2)}.webp`));
    milieu.push(loadImage(`img/milieu/${nf(i, 2)}.webp`));
    bas.push(loadImage(`img/bas/${nf(i, 2)}.webp`));
  }
}

function setup() {
  createCanvas(windowWidth / 3, windowHeight / 2);
  noLoop();

  let select = createSelect();
  select.option("Exercice 1");
  select.option("Exercice 2");
  select.option("Exercice 3");
  select.changed(() => changeExercice(select.value()));

  // Buttons for exercises
  btnExercice1 = createButton("Robot suivant");
  btnExercice1.mousePressed(() => redraw());
  btnExercice1.hide();

  btnExercice2 = createButton("Voyagez avec Goldorak à travers les étoiles");
  btnExercice2.mousePressed(() => {
    exerciceSelectionne = "Exercice 2";
    redraw();
  });
  btnExercice2.hide();

  btnExercice3 = createButton("Nouvelle combinaison");
  btnExercice3.mousePressed(() => redraw());
  btnExercice3.hide();

  changeExercice("Exercice 1");
}

function draw() {
  clear();
  if (exerciceSelectionne === "Exercice 1") {
    drawExercice1();
  } else if (exerciceSelectionne === "Exercice 2") {
    drawExercice2();
  } else if (exerciceSelectionne === "Exercice 3") {
    drawExercice3();
  }
}

function changeExercice(selectedExercice) {
  exerciceSelectionne = selectedExercice;
  if (exerciceSelectionne === "Exercice 1") {
    btnExercice1.show();
    btnExercice2.hide();
    btnExercice3.hide();
  } else if (exerciceSelectionne === "Exercice 2") {
    btnExercice1.hide();
    btnExercice2.show();
    btnExercice3.hide();
  } else if (exerciceSelectionne === "Exercice 3") {
    btnExercice1.hide();
    btnExercice2.hide();
    btnExercice3.show();
  }
  redraw();
}

// Fonctions de dessin pour chaque exercice
function drawExercice1() {
  let randomAnimal = random(animaux);
  image(randomAnimal, 0, 0, width, height); // Redimensionnement de l'image
  filter(BLUR, random(1, 50));
}

function mousePressed() {
  if (exerciceSelectionne === "Exercice 1") {
    redraw();
  }
}

/* function keyPressed() {
  if (key === "s" && exerciceSelectionne === "Exercice 1") {
    saveCanvas("image.png");
  }
} */

function drawExercice2() {
  image(img, 0, 0, width, height); // Redimensionnement de l'image
  drawRandomCircles();
}

function drawRandomCircles() {
  colorMode(HSB, 360, 100, 100); // Set color mode to HSB

  noStroke();

  for (let i = 0; i < 6; i++) {
    fill(random(360), 100, 100); // Random hue, full saturation and brightness
    drawStar(random(40, 800), random(60, 500), random(10, 60));
  }

  function drawStar(x, y, radius) {
    beginShape();
    for (let i = 0; i < 10; i++) {
      let angle = (TWO_PI / 10) * i;
      let xCoordinate = x + cos(angle) * radius * (i % 2 === 0 ? 1 : 0.5);
      let yCoordinate = y + sin(angle) * radius * (i % 2 === 0 ? 1 : 0.5);
      vertex(xCoordinate, yCoordinate);
    }
    endShape(CLOSE);
  }
}

function mousePressed() {
  if (exerciceSelectionne === "Exercice 2") {
    redraw();
  }
}

function drawExercice3() {
  let imgHeight = height / 3; // Diviser la hauteur du canvas en trois
  let imgWidth = width; // Utiliser la largeur du canvas pour les images

  let randomHaut = random(haut);
  let randomMilieu = random(milieu);
  let randomBas = random(bas);

  // Redimensionner et positionner chaque image pour remplir la largeur et une partie de la hauteur du canvas
  image(randomHaut, 0, 0, imgWidth, imgHeight);
  image(randomMilieu, 0, imgHeight, imgWidth, imgHeight);
  image(randomBas, 0, 2 * imgHeight, imgWidth, imgHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();

  function mousePressed() {
    if (exerciceSelectionne === "Exercice 3") {
      redraw();
    }
  }

  /*   function keyPressed() {
    if (key === "s" && exerciceSelectionne === "Exercice 3") {
      saveCanvas("image.png");
    }
  } */
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("image.png");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
