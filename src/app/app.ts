import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { GalleryComponent} from './component/gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('galeria-cine');
}
