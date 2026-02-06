import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  deleteBook: number = 100; // Example book ID to delete, you can replace it with dynamic data
  userId: number = 1; // Example user ID, you can replace it with dynamic data
  authorName: string = 'Arvind'; // Example author name, you can replace it with dynamic data
  bookId: number= 0;
  rAuthorName: string = '';

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.firstChild?.params.subscribe((params) => {
      this.bookId = params['bookId'];
      this.rAuthorName = params['authorName'];
    });
  }

}


