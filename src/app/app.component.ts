import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, take } from 'rxjs/operators';
import { CharacterListResponseModel } from './models/character-list-respone-model';
import { CharacterResponseModel } from './models/character-respone-model';
import {MediaObserver} from '@angular/flex-layout';
import { FizzBuzz } from './fizz-buzz/fizzbuzz';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let fb = new FizzBuzz();
    fb.fizzBuzz();
  }
  title = 'Star Wars Character Search';
  apiUrl = 'https://swapi.co/api/people/';
  
  
}
