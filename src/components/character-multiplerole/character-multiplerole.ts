import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-multiplerole',
  imports: [RouterModule],
  templateUrl: './character-multiplerole.html',
  styleUrl: './character-multiplerole.css',
})
export class CharacterMultiplerole implements OnInit {
  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this._characterService.getMultipleRoleCharacter().subscribe(data => {
      this.characters = data;
    });
  }
}