import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BiotComponent } from './pages/biot/biot.component';
import { PtmComponent } from './pages/ptm/ptm.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    ResultComponent,
    HomePageComponent,
    BiotComponent,
    PtmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
