import { Component, OnInit, HostListener, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgStyle, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  public characters: Character[] = [];
  protected parallaxOffset = signal(0);

  constructor(
    private _characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe(result => {
      this.characters = result;
    });
    console.log(this.characters);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Offset limitado a 0 para que se bloquee cuando llega arriba
    const offset = Math.max(0, 800 - scrollTop);
    this.parallaxOffset.set(offset);
  }

}