import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-tank',
  imports: [RouterModule],
  templateUrl: './character-tank.html',
  styleUrl: './character-tank.css',
})
export class CharacterTank implements OnInit{

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this._characterService.getCharacterTank().subscribe(data => {
      this.characters = data;
    });
}
}