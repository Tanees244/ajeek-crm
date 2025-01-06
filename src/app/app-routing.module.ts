import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'language-selection',
    loadComponent: () =>
      import('./features/language-selection/language-selection.component').then(
        (m) => m.LanguageSelectionComponent
      ),
  },
  { path: '**', redirectTo: 'language-selection' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
