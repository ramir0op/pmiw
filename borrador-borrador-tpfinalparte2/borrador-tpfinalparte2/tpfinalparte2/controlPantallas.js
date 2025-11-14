class controlPantallas{
  constructor(){
    this.estadoPantalla = "inicio";
  }
  
  cambiarPantalla(nuevaPantalla) {
    this.estadoPantalla = nuevaPantalla;
  }
  
  obtenerEstadoActual(){
    return this.estadoPantalla;
  }
  
  dibujarPantallaActual(){
    if (this.estadoPantalla === "inicio") {
      this.mostrarPantallaInicio();
    } else if(this.estadoPantalla === "instrucciones") {
      this.mostrarPantallaInstrucciones();
    } else if (this.estadoPantalla === "jugando") {
      juego.iniciarJuego();
    } else if (this.estadoPantalla === "perdiste") {
      this.mostrarPantallaPerdiste();
    } else if (this.estadoPantalla === "ganaste") {
      this.mostrarPantallaGanaste();
    } else if (this.estadoPantalla === "Creditos"){
      this.mostrarPantallaCreditos();
    }
  }

  // 🔥 NUEVO MÉTODO para detectar teclas según pantalla
  teclaPresionada(key) {
    if (this.estadoPantalla === "perdiste" && (key === 'r' || key === 'R')) {
      this.cambiarPantalla("inicio");
    }
  }
  
  mostrarPantallaInicio(){
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Mas alla del jardin", width / 2, height / 2 - 40 );
    textSize(22);
    text("Presiona enter para comenzar", width / 2, height / 2 + 20);
    text("Presiona I para ver instrucciones", width / 2, height / 2 + 60);
    text("Presiona C para ver creditos", width / 2, height / 2 + 100);
  }
  
  mostrarPantallaInstrucciones(){
    textFont(fuentePixel);
    background(50);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width/2, 50);
    textSize(16);
    text("aca van las intrucciones", width / 2, 120);
    textSize(14);
    text("Presiona B para volver al inicio", width / 2, height -50);
  }
  
  mostrarPantallaCreditos(){
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Creditos", width / 2, height / 2 - 40);
    textSize(16);
    text("Marina Vergara y Ramiro Pereyra", width / 2, height / 2 + 20);
    text("Presiona B para volver al inicio", width / 2, height - 50);
  }

  mostrarPantallaPerdiste() {
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width / 2, height / 2 - 40);
    textSize(16);
    text("Presiona R para volver a intentar", width / 2, height / 2 + 20);
  }
}
