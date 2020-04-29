import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './componant/contact-form/contact-form.component';
import { AboutFormComponent } from './componant/about-form/about-form.component';
import { GallaryFormComponent } from './componant/gallary-form/gallary-form.component';
import { ImageComponent } from './componant/image/image.component';


const routes: Routes = [
  // { path: "", component: GallaryFormComponent},
  { path: "image/:id", component: ImageComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'about-form', component: AboutFormComponent },
  // { path: "", redirectTo: "/gallery", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
