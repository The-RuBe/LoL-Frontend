import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Home } from '../components/home/home';
import { Soporte } from '../components/soporte/soporte';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LoL-Frontend');
}
