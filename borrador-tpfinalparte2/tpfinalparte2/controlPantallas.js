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
    } else if (this.estadoPantalla === "Créditos"){
      this.mostrarPantallaCreditos();
    }
  }
  
  mostrarPantallaInicio(){
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Más allá del jardín", width / 2, height / 2 - 40 );
    textSize(22);
    text("Presiona ENTER para comenzar", width / 2, height / 2 + 20);
    text("Presiona I para ver instrucciones", width / 2, height / 2 + 60);
    text("Presiona C para ver créditos", width / 2, height / 2 + 100);
  }
  
  mostrarPantallaInstrucciones(){
    background(50);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width/2, 50);
    textSize(16);
    text("acá van las intrucciones", width / 2, 120);
    textSize(14);
    text("Presiona B para volver al inicio", width / 2, height -50);
  }
  
  mostrarPantallaCreditos(){
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 2 - 40);
    textSize(16);
    text("Marina Vergara y Ramiro Pereyra", width / 2, height / 2 + 20);
    text("Presiona B para volver al inicio", width / 2, height - 50);
  }
}
 
    
    
    
    
    
    
    
    
    
    
    
    
    
