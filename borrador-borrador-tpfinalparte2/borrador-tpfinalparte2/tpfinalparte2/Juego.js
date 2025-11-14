class Juego {
   constructor(pantallas) {
    this.pantallas = pantallas;
    this.jugador = new Jugador(protagonistasImg);
    this.bicho = new Enemigo(sapoImg);

  }

  iniciarJuego() {
    background(100);

    this.jugador.mostrar();

    let dx = 0;
    let dy = 0;
    if (keyIsDown(LEFT_ARROW)) dx = -1;
    if (keyIsDown(RIGHT_ARROW)) dx = 1;
    if (keyIsDown(UP_ARROW)) dy = -1;
    if (keyIsDown(DOWN_ARROW)) dy = 1;

    this.jugador.mover(dx, dy);

    this.bicho.correr();
    this.bicho.mostrar();

    if (this.bicho.haLlegadoAJugador(this.jugador)) {
  this.pantallas.cambiarPantalla("perdiste");
}
  }

//  setEstadoPantalla(estado) {
//    this.pantallaActual = estado;
//    print("Cambio de pantalla:", estado);
//  }
}