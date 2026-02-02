import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar class="!bg-green-100 !h-28 flex justify-center">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-black text-green-800 tracking-wider leading-tight"
          >お薬飲んだボタン</span
        >
        <span class="text-base font-medium text-green-700 mt-1">お薬飲んだら褒めてもらえます</span>
      </div>
    </mat-toolbar>
  `,
})
export class HeaderComponent {}
