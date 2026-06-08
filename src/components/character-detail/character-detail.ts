import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetail implements OnInit {

  public id: string = '';
  public character?: Character;

  constructor(private _route: ActivatedRoute, private _characterService: CharacterService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!;

    this._characterService.getCharacterById(this.id).subscribe(result =>
      this.character = result
    );

  }
}
