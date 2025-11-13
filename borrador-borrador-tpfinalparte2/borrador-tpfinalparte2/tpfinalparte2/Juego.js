
// --- Clase Juego ---
class Juego {
  constructor() {
    // Crear al jugador
    this.jugador = new Jugador(protagonistasImg);
    // Creamos al enemigo con la imagen ya cargada
    this.bicho = new Enemigo(sapoImg);
  }

  iniciarJuego() {
    background(100);
 // Actualizamos y mostramos al jugador
      this.jugador.mostrar();


  let dx = 0;
  let dy = 0;

  if (keyIsDown(LEFT_ARROW))  dx = -1;
  if (keyIsDown(RIGHT_ARROW)) dx = 1;
  if (keyIsDown(UP_ARROW))    dy = -1;
  if (keyIsDown(DOWN_ARROW))  dy = 1;

  this.jugador.mover(dx, dy);
   
    // Actualizamos y mostramos al enemigo
    this.bicho.correr();
    this.bicho.mostrar();
  }
}
