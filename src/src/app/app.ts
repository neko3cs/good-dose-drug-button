import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoseButtonComponent } from './dose-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoseButtonComponent],
  template: `
    <main class="max-w-2xl mx-auto text-center p-8 font-sans">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">{{ title() }}</h1>
      </header>
      
      <app-dose-button />

      <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Good Dose Drug Button');
}
