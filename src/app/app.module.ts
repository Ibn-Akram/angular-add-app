import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { WorkerComponent } from './components/worker/worker';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
