import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishService } from './fish/fish.service';
import { FishCardComponent } from './fish-card/fish-card.component';
import { FishPageComponent } from './fish-page/fish-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FishCardComponent,
    FishPageComponent,
    MainPageComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
