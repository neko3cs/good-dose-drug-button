import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoseButtonComponent } from './dose-button.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  host: {
    class: 'flex flex-col min-h-screen',
  },
  imports: [RouterOutlet, DoseButtonComponent, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main class="max-w-3xl mx-auto text-center p-12 font-sans flex-grow">
      <app-dose-button />
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [],
})
export class App {}
