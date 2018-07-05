import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopRendererComponent } from './top-renderer/top-renderer.component';
import { MiddleRendererComponent } from './middle-renderer/middle-renderer.component';
import { BottomRendererComponent } from './bottom-renderer/bottom-renderer.component';
import { MainRendererComponent } from './main-renderer/main-renderer.component';
import { SlidersComponent } from './sliders/sliders.component';

@NgModule({
  declarations: [
    AppComponent,
    TopRendererComponent,
    MiddleRendererComponent,
    BottomRendererComponent,
    MainRendererComponent,
    SlidersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
