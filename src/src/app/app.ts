import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoseButtonComponent } from './dose-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoseButtonComponent],
  template: `
    <main class="app-container">
      <header>
        <h1>{{ title() }}</h1>
      </header>
      
      <app-dose-button />

      <router-outlet />
    </main>
  `,
  styles: `
    .app-container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      padding: 2rem;
      font-family: sans-serif;
    }
    header h1 {
      color: #333;
      margin-bottom: 2rem;
    }
  `,
})
export class App {
  protected readonly title = signal('Good Dose Drug Button');
}
