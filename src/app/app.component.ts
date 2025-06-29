import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MovieListComponent } from "./movie-list/movie-list.component";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieapp';

  @Output() movieSelected = new EventEmitter<number>();

  onMovieSelected(movieId: number): void {
    this.movieSelected.emit(movieId);
    console.log(`MovieApp Wrapper re-emitting: ${movieId}`);
  }
}
