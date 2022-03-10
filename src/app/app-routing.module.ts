import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'articles', component: ArticleReaderComponent},
    {path : 'contact', component: ContactComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
