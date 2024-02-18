import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';


@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'hdtest1-root',
  template: `    
    
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
      <h1>Inicia sesión</h1>
      <hd-wallet-multi-button></hd-wallet-multi-button>
    </div>
 
  `
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);

}