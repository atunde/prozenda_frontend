import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {
  private searchUrl = "https://swapi.co/api/people/?search=";
  @Output()
  filter = new Subject<string>();

  searchFormControl = new FormControl('', [
    Validators.minLength(1),
  ]);

  myForm = new FormGroup({ 'search':this.searchFormControl });

  constructor() { }

  ngOnInit() { }

  searchCharacter() {
    this.filter.next(`${this.searchUrl}${this.searchFormControl.value}`);
  }
}
