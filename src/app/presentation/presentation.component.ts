import { Component } from '@angular/core';
import { EnteteComponent } from '../entete/entete.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [EnteteComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  paragraphs: string[] = [
    'Je suis psychologue clinicienne et thérapeute, diplômée en Psychologie Clinique avec un Master de Psychopathologie Clinique, Psychologie Médicale et Psychothérapie. Ainsi, je suis spécialisée dans l’accompagnement thérapeutique des personnes.',
    'En consultation individuelle je mets mon expérience et mon écoute au service de celles et ceux qui ont besoin d’un accompagnement personnalisé adapté à leur parcours et à leurs défis (en fonction du vécu de chacun ainsi que de son état de santé) grâce à un travail d’écoute, de soutien et de réflexion.',
    'Forte de plusieurs années d’expérience dans divers services hospitaliers, cela me permet également de pouvoir prendre en charge des personnes souffrants de maladies ayant des parcours de soins complexe ou traversant des étapes de vie délicates, ainsi que leurs familles.'
  ];
}
