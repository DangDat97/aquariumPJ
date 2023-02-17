import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages/pages.component';
import { FAQComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { EventComponent } from './event/event.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'event',component:EventComponent},
  {path:'services',component:ServicesComponent},
  {path:'404',component:PagesComponent},
  {path:'FAQ',component:FAQComponent},
  {path:'blog',component:BlogComponent},
  {path:'singlepost',component:SinglepostComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    PagesComponent,
    FAQComponent,
    BlogComponent,
    SinglepostComponent,
    EventComponent,

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
