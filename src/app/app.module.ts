import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './post.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import {Routes, RouterModule} from '@angular/router';


const misRutas: Routes = [
  {'path':'', 'component': HomeComponent},
{'path':'home', 'component': HomeComponent},
{'path':'post/:id','component': DetailComponent},
{'path':'*', 'component': HomeComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
