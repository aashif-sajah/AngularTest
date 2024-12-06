import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialConfigComponent } from './initialConfig/initial-config/initial-config.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InitialConfigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OOP';
}
