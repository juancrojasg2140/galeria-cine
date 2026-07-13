import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MovieCardComponent], // Importamos la card para poder usarla en el HTML
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  // Tus datos de prueba listos para la API
  moviesList = [
    { title: 'The Matrix', year: 1999, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500' },
    { title: 'Inception', year: 2010, image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500' }
  ];
}
