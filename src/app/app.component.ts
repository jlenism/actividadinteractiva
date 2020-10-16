import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividadinteractiva';
  inicio: boolean = true;
  a: boolean = false;
  b: boolean = false;
  c: boolean = false;
  d: boolean = false;
  e: boolean = false;
  f: boolean = false;
  f1: boolean = false;
  f2: boolean = false;
  f3: boolean = false;
  f4: boolean = false;
  f5: boolean = false;
  f6: boolean = false;
  f7: boolean = false;
  f8: boolean = false;
  f9: boolean = false;
  f10: boolean = false;

  intentos: number = 3;
  puntos: number = 0;

  sonidoCorrecto() {
    this.intentos = 3;
    this.puntos = this.puntos + 1;
    console.log(this.intentos);
    const audioCorrecto = new Audio('assets/moneda.mp3');
    audioCorrecto.play();
  }

  sonidoVictoria() {
    const audioVictoria = new Audio('assets/yay.mp3');
    audioVictoria.play();
  }

  sonidoIncorrecto() {
    this.intentos = this.intentos - 1;

    if (this.intentos === 0) {
      const audioPerder = new Audio('assets/gameover.mp3');
      audioPerder.play();
      console.log('if intentos es 0');
      
    } else {      
      if (this.puntos > 0) {      
        this.puntos = this.puntos - 1;
      } else {
        this.puntos = 0;
      }
      const audioIncorrecto = new Audio('assets/incorrecto.mp3');
      audioIncorrecto.play();
    }
  }

  iniciar() {
    this.inicio = false;
    this.a = true;
  }

  reiniciar() {
    window.location.reload();
  }
 
  primariosSi() {
    this.a = false;
    this.b = true;
    // Ejecutar sonido de todo bien
    this.sonidoCorrecto();
    // Mostrar anuncio con muñeco
  }

  primariosNo() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();
    // Mostrar anuncio con muñeco
  }

  resuelveSi() {
    this.b = false;
    this.c = true;
    // Ejecutar sonido de todo bien
    this.sonidoCorrecto();
    // Mostrar anuncio con muñeco    
  }

  resuelveNo() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();
    // Mostrar anuncio con muñeco
    
  }

  colorCorrecto1() {
    this.c = false;
    this.d = true;
    // Ejecutar sonido de todo bien
    this.sonidoCorrecto();
  }

  colorCorrecto2() {
    this.d = false;
    this.e = true;
    // Ejecutar sonido de todo bien
    this.sonidoCorrecto();
  }

  colorCorrecto3() {
    this.e = false;
    this.f = true;   
    // Ejecutar sonido de todo bien
    this.sonidoCorrecto(); 
  }

  colorIncorrecto1() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();    
  }

  colorIncorrecto2() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();    
  }

  colorIncorrecto3() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();    
  }

  numeroIncorrecto() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();    
  }

  numeroCorrecto1() {
    this.f = false;
    this.f1 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto2() {
    this.f1 = false;
    this.f2 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto3() {
    this.f2 = false;
    this.f3 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto4() {
    this.f3 = false;
    this.f4 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto5() {
    this.f4 = false;
    this.f5 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto6() {
    this.f5 = false;
    this.f6 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto7() {
    this.f6 = false;
    this.f7 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto8() {
    this.f7 = false;
    this.f8 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto9() {
    this.f8 = false;
    this.f9 = true;
    // Reproducir sonido de error
    this.sonidoCorrecto();    
  }

  numeroCorrecto10() {
    this.f9 = false;
    this.f10 = true;
    // Reproducir sonido de error
    this.sonidoVictoria();    
  }
}
