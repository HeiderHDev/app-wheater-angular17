import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-wheater',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>homeWheater works!</p>`,
  styleUrl: './homeWheater.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWheaterComponent { }
