import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  deleteBook: number = 100; // Example book ID to delete, you can replace it with dynamic data
  userId: number = 1; // Example user ID, you can replace it with dynamic data
}
