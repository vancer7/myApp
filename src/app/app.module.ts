import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibCalcModule} from "./libraries/lib-calc/lib-calc.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
