class Enemigo {

  constructor(imagen) {
    // Propiedades iniciales
    this.x = 640 / 2;
    this.y = 480 / 3;
    this.img = imagen;
  }
//class Enemigo {

//los METODOS son las acciones de mi clase: las funciones

  correr() {  //"actualizar" sus propiedades
    //variable = tamPantalla * noise( numeroIncrementalNormalizado );  //un numero que incremente constantemente entre 0 y 1    
    this.x = 640 * noise(0.005 * frameCount);
    this.y = 480 * noise(0.005 * frameCount + 10000);
  
  }

  mostrar() {  //"dibujar" en la pantalla
 imageMode(CENTER);                   // Dibuja desde el centro
    image(this.img, this.x, this.y, 100, 100); // Tamaño similar al rectángulo original
  }
}
