import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, take } from 'rxjs/operators';
import { CharacterListResponseModel } from './models/character-list-respone-model';
import { CharacterResponseModel } from './models/character-respone-model';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'Star Wars Character Search';
  apiUrl = 'https://swapi.co/api/people/';
//   characterList: CharacterResponseModel[] = [];
//   unsubscribe$ = new Subject();
//   maxCount: number;
//   showingCount: number;
//   desiredCols: number;
//   private nextUrl: string;
//   cols$: Observable<number>;

//   constructor(private readonly http: HttpClient,
//     private mediaObserver: MediaObserver) {
//     this.loadCharacters(this.apiUrl);

//     this.cols$ = this.mediaObserver.asObservable().pipe(
//       map(change => {
//         debugger;
//        return 0;
//       })
//     );
//   }

//   ngOnInit() {
//     this.setDesiredColNumber();
// }

//   onResize(event) {
//     this.setDesiredColNumber();
//   }

//   setDesiredColNumber(){
//     this.desiredCols = (window.innerWidth <= 600) ? 2 : (window.innerWidth <= 800) ? 3 :(window.innerWidth <= 1000) ? 4 : (window.innerWidth <= 1300)? 6 : 10;
//   }

//   loadMore() {
//     this.loadCharacters(this.nextUrl);
//   }

//   loadCharacters(apiUrl: string, refresh?: boolean) {
//     if (!apiUrl) {
//       return;
//     }
//     this.http.get<CharacterListResponseModel>(apiUrl)
//     .pipe(
//       map(response => {
//         this.nextUrl = response && response.next;
//         this.maxCount = response && response.count;
//         return response &&  response.results;
//       }),
//       take(1)
//     )
//     .subscribe(res=>
//       {
//          this.characterList = refresh ? res : this.characterList.concat(res);
//       });
//   }

//   getImage(index: number){
//     return index % 2 ?
//      "/assets/mock-image.png" :
//      "/assets/mock-image-1.png"
//   }

//   ngOnDestroy() {
//     this.unsubscribe$.next();
//   }

}
