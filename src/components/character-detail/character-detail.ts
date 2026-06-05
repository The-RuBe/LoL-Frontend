import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetail implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
