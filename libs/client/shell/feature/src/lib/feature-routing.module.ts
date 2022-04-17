import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
<<<<<<< HEAD
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@graduates/client/example/feature').then(
            (m) => m.FeatureModule
          ),
      },
    ]),
  ],
||||||| 569687cf
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
=======
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
})
export class FeatureRoutingModule {}
