import { Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { AppComponent } from './app.component';
import { OutilsComponent } from './outils/outils.component';

export const routes: Routes = [
    {
        path:'',
        component: PresentationComponent,
    },
    {
        path:'presentation',
        component: PresentationComponent
    },
    {
        path:'outils',
        component: OutilsComponent
    },
    {
        path:'**',
        component: PresentationComponent
    },
];
