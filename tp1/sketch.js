//Ramiro Pereyra
// Comisión 2
// 120353/2
//https://youtu.be/_UOYjE57aTI

// carga de imagen
let imagenR;

// Variables
let gris, blancocirculo, negro, coloractual, colorfondo, ultimocolor;
let cambiocolor = false;
let estado = 1;
let masalpha, menosalpha;

function preload() {
  imagenR = loadImage("data/referencia.jpeg");
}

function setup() {
  createCanvas(800, 400);

  // Valores variables
  gris = color(125, 125, 125);
  blancocirculo = color(255, 255, 255);
  negro = color(0, 0, 0);

  imagenR.resize(400, 400);

  coloractual = blancocirculo;
  colorfondo = negro;
  ultimocolor = coloractual;
  masalpha = 255;
  menosalpha = 100;
}

function draw() {
  console.log(mouseX, mouseY);

  background(colorfondo);
  image(imagenR, 0, 0);

  // Grosor dinámico basado en mouseX
  let grosor = calcularGrosorDesdeMouse();
  dibujarGrillaLineas(grosor);

  // Alpha dinámico basado en mouseY
  let alpha = calcularAlphaDesdeMouse();
  fill(coloractual.levels[0], coloractual.levels[1], coloractual.levels[2], alpha);

  noStroke();

  // Cuadrícula de círculos
  for (let a = 409; a < width; a += 61) {
    for (let b = 51; b < height; b += 61) {
      ellipse(a, b, 22, 22);
    }
  }
}

function keyPressed() {
  if (key === 'k' || key === 'K') {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    coloractual = color(r, g, b);
    cambiocolor = true;
    estado = 2;

    let r1 = random(255);
    let g1 = random(255);
    let b1 = random(255);
    colorfondo = color(r1, g1, b1);
  } else if (key === 'j' || key === 'J') {
    estado = 1;
    colorfondo = negro;
    coloractual = blancocirculo;
  }
}

// Función propia con retorno - grosor basado en mouseX
function calcularGrosorDesdeMouse() {
  let grosorBase = 20;           // Grosor original 
  let factorCambio = 0.05;       // Velocidad a la que cambia el grosor
  let diferencia = mouseX - 400; // Dist desde el centro

  let grosor = grosorBase - (diferencia * factorCambio);
  grosor = constrain(grosor, 5, 40); // Limita el grosor
  return grosor;
}

// Función propia con retorno - alpha basado en mouseY
function calcularAlphaDesdeMouse() {
  let resultado = 255 - mouseY;
  if (resultado < 100) {
    resultado = 100; // Limita el valor mínimo
  }
  return resultado;
}

// Función void para la grilla de líneas 
function dibujarGrillaLineas(grosor) {
  stroke(gris);
  strokeWeight(grosor);

  // Líneas horizontales
  for (let i = 51; i < width; i += 61) {
    line(400, i, 800, i);
  }

  // Líneas verticales
  for (let i = 409; i < width; i += 61) {
    line(i, 0, i, 400);
  }
}

