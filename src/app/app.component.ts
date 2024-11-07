import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EnteteComponent } from './entete/entete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnteteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  
}
