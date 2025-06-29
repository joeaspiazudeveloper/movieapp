import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  // Output to emit the ID of the selected movie
  @Output() movieSelected = new EventEmitter<number>();

  movies: Movie[] = [
    { id: 1, title: 'El Señor de los Anillos: La Comunidad del Anillo', imageUrl: 'https://placehold.co/300x450/222222/E0BBE4?text=LOTR_Fellowship' },
    { id: 2, title: 'Pulp Fiction', imageUrl: 'https://placehold.co/300x450/000000/F0F3BD?text=Pulp_Fiction' },
    { id: 3, title: 'El Origen', imageUrl: 'https://placehold.co/300x450/444444/957DAD?text=Inception' },
    { id: 4, title: 'Interestelar', imageUrl: 'https://placehold.co/300x450/1A1A1A/A0B9D9?text=Interstellar' },
    { id: 5, title: 'Cadena Perpetua', imageUrl: 'https://placehold.co/300x450/333333/C8F0BD?text=Shawshank' },
    { id: 6, title: 'Parásitos', imageUrl: 'https://placehold.co/300x450/555555/E6E6FA?text=Parasite' },
    { id: 7, title: 'El Señor de los Anillos: El Retorno del Rey', imageUrl: 'https://placehold.co/300x450/666666/FFCC00?text=LOTR_Return' }
  ];

  selectMovie(id: number) {
    // Emit the movie ID via the Output
    this.movieSelected.emit(id);
    console.log(`Movie ${id} selected from MovieApp (via Output)`);
  }
}
