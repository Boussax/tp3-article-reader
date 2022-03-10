import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleReaderComponent,
    NavigationBarComponent,
    ArticleDisplayComponent,
    NewEntryComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
