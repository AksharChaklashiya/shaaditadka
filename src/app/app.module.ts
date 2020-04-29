import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './componant/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutFormComponent } from './componant/about-form/about-form.component';
import { GallaryFormComponent } from './componant/gallary-form/gallary-form.component';
import { ImageComponent } from './componant/image/image.component';
import { ImageService } from './componant/image/shared/image.service';
import { HttpClientModule } from  '@angular/common/http';
import { NavbarComponent } from './componant/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AboutFormComponent,
    GallaryFormComponent,
    ImageComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
