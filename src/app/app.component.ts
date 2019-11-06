import { Component, OnInit } from '@angular/core';
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
