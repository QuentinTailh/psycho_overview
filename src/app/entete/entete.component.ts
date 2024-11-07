import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-entete',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenubarModule, ButtonModule, AvatarModule],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.scss'
})
export class EnteteComponent {
  items: MenuItem[] = [
    {
      label: 'Presentation',
      icon: 'pi pi-home',
      routerLink: 'presentation'
    },
    {
      label: 'Outils',
      icon: 'pi pi-star',
      routerLink: 'outils'
    },
    {
      label: 'Services',
    },
    {
      label: 'Inclusivité',
    },
    {
      label: 'Prendre rendez-vous',
    },

  ];
}
