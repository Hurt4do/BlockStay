import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'test1-root',
  template: `    
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
    <h1>Inicia sesión</h1>
    <button mat-raised-button>Conecta tu billetera</button>
  </div>
  `
})
export class AppComponent { }