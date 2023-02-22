import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages/pages.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'404',component:PagesComponent},
  {path:'FAQ',component:FAQComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},

  {path:'about',component:AboutComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    PagesComponent,
    FAQComponent,
    ContactComponent,
    GalleryComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
