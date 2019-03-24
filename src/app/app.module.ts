import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponent } from './my-new/my-new.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriseComponent } from './prise/prise.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './news/news.component';

import { NewServiceService } from './new-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponent,
    HomeComponent,
    AboutComponent,
    PriseComponent,
    NotFoundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
