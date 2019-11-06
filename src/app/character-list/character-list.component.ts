import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { CharacterResponseModel, Gender } from '../models/character-respone-model';
import { HttpClient } from '@angular/common/http';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CharacterListResponseModel } from '../models/character-list-respone-model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnChanges {
  @Input()
  characterList: CharacterResponseModel[] = [];
  @Input()
  apiUrl: string;

  desiredCols: number;
  nextUrl: string;
  maxCount: number;

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.loadCharacters(this.apiUrl);
    this.setDesiredColNumber();
  }

  onResize(event) {
    this.setDesiredColNumber();
  }
  setDesiredColNumber() {
    this.desiredCols = (window.innerWidth <= 600) ? 2 : (window.innerWidth <= 800) ? 3 : (window.innerWidth <= 1000) ? 4 : (window.innerWidth <= 1300) ? 6 : 10;
  }

  loadMore() {
    this.loadCharacters(this.nextUrl);
  }

  loadCharacters(apiUrl: string, refresh?: boolean) {
    if (!apiUrl) {
      return;
    }
    this.http.get<CharacterListResponseModel>(apiUrl)
      .pipe(
        map(response => {
          this.nextUrl = response && response.next;
          this.maxCount = response && response.count;
          return response && response.results;
        }),
        take(1)
      )
      .subscribe(res => {
        this.characterList = refresh ? res : this.characterList.concat(res);
      });
  }

  getImage(index: number) {
    return index % 2 ?
      "/assets/mock-image.png" :
      "/assets/mock-image-1.png"
  }

  sortBy(data) {
    this.characterList = this.characterList.sort((a, b) => this.comparer(a, b, data.value));
  }

  comparer(a: CharacterResponseModel, b: CharacterResponseModel, data: string) {
    if (data === "A-Z") {
      if (a.name > b.name) {
        return 1
      } else return -1;
    }
    if (data === "Z-A") {
      return a.name < b.name ? 1 : -1;
    }
    if (data === "Female") {
      return (a.gender === Gender.FEMALE && (b.gender === Gender.MALE || b.gender === Gender.NA)) ? -1 : 1;
    }
    if (data === "Male") {
      return (a.gender === Gender.MALE && (b.gender === Gender.FEMALE || b.gender === Gender.NA)) ? -1 : 1;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.apiUrl && changes.apiUrl.currentValue && !changes.apiUrl.firstChange) {
      this.loadCharacters(changes.apiUrl.currentValue, true);
    }
  }
}
