import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wheather-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>wheatherDetails works!</p>`,
  styleUrl: './wheatherDetails.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WheatherDetailsComponent { }
