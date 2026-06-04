import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}

  goHome(event: Event): void {
    event.preventDefault();
    this.router.navigate(['']).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }

  goToChampions(event: Event): void {
    event.preventDefault();
    this.router.navigate(['']).then(() => {
      setTimeout(() => {
        const sectionHeader = document.querySelector('.section-header');
        if (sectionHeader) {
          sectionHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
