import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './components/home/home';
import { AllBooks } from './components/all-books/all-books';
import { BookDetails } from './components/book-details/book-details';
import { Public } from './public';
import { PublicRoutingModule } from './public-routing-module';



@NgModule({
  declarations: [
    Home,
    AllBooks,
    BookDetails,
    Public
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
