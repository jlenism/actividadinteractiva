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
  mario1: boolean;
  mario2: boolean;
  mario3: boolean;
  mario4: boolean;
  mario5: boolean;
  mario6: boolean;

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
  sonidoVida() {
    const audioVida = new Audio('assets/mario-brosvida.mp3');
    audioVida.play();
  }

  iniciar() {
    this.inicio = false;
    this.a = true;
  }

  reiniciar() {
    window.location.reload();
  }

  primariosSi() {
      this.mario1 = true;
      this.a = false;
      this.sonidoVida();
      setTimeout(() => {
        this.mario1 = false;
        this.b = true;
        this.sonidoCorrecto();
      }, 1500);
    // Ejecutar sonido de todo bien
    // Mostrar anuncio con muñeco
  }

  primariosNo() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();
    // Mostrar anuncio con muñeco
  }

  resuelveSi() {
    this.mario2 = true;
    this.b = false;
    this.sonidoVida();
    setTimeout(() => {
      this.mario2 = false;
      this.c = true;
      this.sonidoCorrecto();
    }, 1500);
  }

  resuelveNo() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();
    // Mostrar anuncio con muñeco

  }

  colorCorrecto1() {
    this.mario3 = true;
    this.c = false;
    this.sonidoVida();
    setTimeout(() => {
      this.mario3 = false;
      this.d = true;
      this.sonidoCorrecto();
    }, 1500);
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

  // tslint:disable-next-line: typedef
  numeroIncorrecto() {
    // Reproducir sonido de error
    this.sonidoIncorrecto();
  }

  numeroCorrecto1() {
    this.mario4 = true;
    this.f = false;
    this.sonidoVida();
    setTimeout(() => {
      this.mario4 = false;
      this.f1 = true;
      this.sonidoCorrecto();
    }, 1500);
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
    this.mario5 = true;
    this.f4 = false;
    this.sonidoVida();
    setTimeout(() => {
      this.mario5 = false;
      this.f5 = true;
      this.sonidoCorrecto();
    }, 1500);
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
    this.mario6 = true;
    this.f9 = false;
    this.sonidoVida();
    setTimeout(() => {
      this.mario6 = false;
      this.f10 = true;
      this.sonidoVictoria();
    }, 3000);
  }
}
