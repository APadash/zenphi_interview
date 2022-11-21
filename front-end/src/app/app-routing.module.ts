import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    {
      path: '',
      component: ContentLayoutComponent,
      children: [
        {
          path: '',
          //loadChildren: () =>
            //import('').then()
        },
    ]
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }