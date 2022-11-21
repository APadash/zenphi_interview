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
          loadChildren: () =>
            import('./modules/user/user-list/user-list.module').then(x => x.UserListModule)
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