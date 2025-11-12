
// dice enemigo pero tiene el sprite de los jugadores 
let img;  // La imagen se cargará antes de iniciar el juego

// --- Carga previa de recursos ---
function preload() {
  img = loadImage('data/sapo.png');
}

// --- Clase Juego ---
class Juego {
  constructor() {
    // Creamos al enemigo con la imagen ya cargada
    this.bicho = new Enemigo(img);
  }

  iniciarJuego() {
    background(100);

    // Actualizamos y mostramos al enemigo
    this.bicho.correr();
    this.bicho.mostrar();
  }
}