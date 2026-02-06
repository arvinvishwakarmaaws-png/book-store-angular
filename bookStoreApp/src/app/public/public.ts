import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  standalone: false,
  templateUrl: './public.html',
  styleUrl: './public.scss',
})
export class Public {
  bookId: number = 100; // Example book ID, you can replace it with dynamic data
}
