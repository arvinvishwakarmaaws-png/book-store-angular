import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  standalone: false,
  templateUrl: './delete-book.html',
  styleUrl: './delete-book.scss',
})
export class DeleteBook implements OnInit {
  bookId: number = 0;
  authorName: string = '';
  userId: number = 0;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.parent?.params.subscribe((params) =>{
      this.userId = params['userId'];
    });
  }


}
