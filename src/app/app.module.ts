import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './componant/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutFormComponent } from './componant/about-form/about-form.component';
import { GallaryFormComponent } from './componant/gallary-form/gallary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AboutFormComponent,
    GallaryFormComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
