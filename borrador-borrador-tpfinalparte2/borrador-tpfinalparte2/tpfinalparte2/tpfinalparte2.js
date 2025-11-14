let juego;
let sapoImg,protagonistasImg,fuentePixel;

function preload(){
  sapoImg = loadImage('data/sapo.png');
  protagonistasImg = loadImage('data/protagonistas.png');
  fuentePixel = loadFont ('fuentes/Tomeoftheunknown-3gL3.ttf');
}

function setup() {
  createCanvas(640, 480);
  pantallas = new controlPantallas();
  juego = new Juego(pantallas);
}


function draw() {
  pantallas.dibujarPantallaActual();
}

function keyPressed() {

  // 🔥 Avisar siempre a la clase pantallas
  pantallas.teclaPresionada(key);

  // ----------------- PANTALLA INICIO -----------------
  if (pantallas.obtenerEstadoActual()=== "inicio"){
    if (keyCode === ENTER){
      pantallas.cambiarPantalla("jugando");
      juego.iniciarJuego();
    } else if (key === 'i' || key === 'I'){
      pantallas.cambiarPantalla("instrucciones");
    } else if (key === 'c' || key === 'C'){
      pantallas.cambiarPantalla("Creditos");
    }

  // ----------------- PANTALLA INSTRUCCIONES -----------------
  } else if (pantallas.obtenerEstadoActual() === "instrucciones" &&
            (key === 'b' || key === 'B')) {

    pantallas.cambiarPantalla("inicio");

  // ----------------- PANTALLA CRÉDITOS -----------------
  } else if (pantallas.obtenerEstadoActual() === "Creditos" &&
            (key === 'b' || key === 'B')) {

    pantallas.cambiarPantalla("inicio");

  // ----------------- PANTALLA PERDISTE / GANASTE -----------------
  } else if (
      pantallas.obtenerEstadoActual() === "perdiste" ||
      pantallas.obtenerEstadoActual() === "ganaste"
  ) {

    if (key === 'r' || key === 'R') {
      juego.reiniciarJuego();
      pantallas.cambiarPantalla("inicio");
    }
  }
}