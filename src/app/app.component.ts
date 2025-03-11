import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LibroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';
}
