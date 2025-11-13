let juego;

function setup() {
  createCanvas(640, 480);
  pantallas = new controlPantallas();
  juego = new Juego(pantallas);
}


function draw() {
  pantallas.dibujarPantallaActual();
}

function keyPressed(){
  if (pantallas.obtenerEstadoActual()=== "inicio"){
    if (keyCode === ENTER){
      pantallas.cambiarPantalla ("jugando");
      juego.iniciarJuego();
    }else if (key === 'i' || key === 'I'){
      pantallas.cambiarPantalla ("instrucciones");
    }else if (key === 'c' || key === 'C'){
      pantallas.cambiarPantalla ("Créditos");
    }
  }else if(pantallas.obtenerEstadoActual() === "instrucciones" && (key === 'b' || key === 'B')){
    pantallas.cambiarPantalla("inicio");
  }else if (pantallas.obtenerEstadoActual() === "Créditos" && (key === 'b' || key === 'B')){
    pantallas.cambiarPantalla ("inicio");
}
}
