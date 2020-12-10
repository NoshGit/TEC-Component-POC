import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent} from './component/grid/grid.component';
import { HomeComponent} from './component/home/home.component';
import { ButtonsComponent} from './component/buttons/buttons.component';

const routes: Routes = [
  { path: '', redirectTo:"home", pathMatch: "full"},
  { path: 'home', component: HomeComponent, children:[
    { path: 'buttons', component: ButtonsComponent },
    { path: 'grid', component: GridComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
