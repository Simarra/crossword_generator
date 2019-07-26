import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crossconfig',
    pathMatch: 'full'
  },
  { path: 'crossconfig', loadChildren: './crossconfig/crossconfig.module#CrossconfigPageModule' },
  { path: 'gridviewer', loadChildren: './gridviewer/gridviewer.module#GridviewerPageModule' },
  { path: 'gridcorrection', loadChildren: './gridcorrection/gridcorrection.module#GridcorrectionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
