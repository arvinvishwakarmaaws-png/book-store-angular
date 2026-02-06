import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Public } from './public';
import { AllBooks } from './components/all-books/all-books';
import { BookDetails } from './components/book-details/book-details';

const routes: Routes = [
  {path: 'public', component: Public, children: [
    {path: 'all-books', component: AllBooks},
    {path: 'book-details/:bookId', component: BookDetails}
  ] }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
