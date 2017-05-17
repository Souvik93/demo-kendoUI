import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
//import { InputsModule } from '@progress/kendo-angular-inputs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftPanelComponent } from './left-panel/left-panel.component';

 import { PanelBarModule } from '@progress/kendo-angular-layout';

 import { LayoutModule } from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ButtonsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
