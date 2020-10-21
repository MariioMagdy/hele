import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './content/main/main.component';
import { ListComponent } from './content/list/list.component';
import { ItemComponent } from './content/item/item.component';
import { RoutesComponent } from './content/routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    ItemComponent,
    RoutesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
