class Jugador {
  constructor(imagen) {
    // Propiedades iniciales
    this.protagonistasImg = imagen;
    this.x = 100;
    this.y = 100;
    this.tamano = 100;   // hitbox real
    this.ancho  = 100;
    this.alto   = 130;
    this.velocidad = 5; //control de la velocidad
    
  
  }
  
  mostrar() {
    imageMode(CENTER);
    image(this.protagonistasImg, this.x, this.y, this.tamano, this.tamano + 30);
  }
  
   mover(dx, dy) {
    // Movimiento en ejes x,y
    this.x += dx * this.velocidad;
    this.y += dy * this.velocidad;

    // Limita los bordes del canvas
   // this.x = constrain(this.x, 0, width - this.tamano);
   // this.y = constrain(this.y, 0, height - this.tamano);
  }
  //colision
 
}
