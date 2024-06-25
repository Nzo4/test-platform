import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BiotComponent } from './pages/biot/biot.component';
import { PtmComponent } from './pages/ptm/ptm.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'biot', component: BiotComponent,
    title: 'БиОТ'
  },
  {
    path: 'ptm', component: PtmComponent,
    title: 'ПТМ'
  },
  {
    path: 'test', component: MainMenuComponent
  },
  {
    path: 'result', component: ResultComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
