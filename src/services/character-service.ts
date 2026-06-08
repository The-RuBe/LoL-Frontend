import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../model/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  
  private _baseUrl: string = "http://localhost:8080/api";

  constructor(
    private _http: HttpClient
  ) {}

  public getCharacters(): Observable<Character[]> {
    return this._http.get<Character[]>(this._baseUrl + "/characters");

  }

  public getCharacterById(id: number): Observable<Character> {
    return this._http.get<Character>(this._baseUrl + "/characters/" + id);
  }

  public getMultipleRoleCharacter(): Observable<Character[]> {
    return this._http.get<Character[]>(this._baseUrl + "/characters/filter/multiplerole");
  }

}