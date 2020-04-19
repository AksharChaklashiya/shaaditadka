import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './componant/contact-form/contact-form.component';
import { AboutFormComponent } from './componant/about-form/about-form.component';


const routes: Routes = [
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'about-form', component: AboutFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
