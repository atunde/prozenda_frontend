import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { FizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {

let fizzBuzz;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ ],
//       providers:[ FizzBuzz]
//     });
//     fizzBuzz = TestBed.get("FizzBuzz");
//   });

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

  it('should be created', () => {
    expect(fizzBuzz).toBeTruthy();
  });

  it('should return Fizz for multiples of 3'), function() {
      //setup
      //act
      var res = fizzBuzz.returnOutput(3);
      //assert
      expect(res).toEqual("Fizz");
  }
  it('should return Buzz for multiples of 5'), function() {
    //setup
    //act
    var res = fizzBuzz.returnOutput(10);
    //assert
    expect(res).toEqual("Buzz");
}
it('should return FizzBuzz for multiples of 5 and 3'), function() {
    //setup
    //act
    var res = fizzBuzz.calculateOutput(15);
    //assert
    expect(res).toEqual("FizzBuzz");
}
it('should return number for neither multiples of 5 nor 3'), function() {
    //setup
    //act
    var res = fizzBuzz.calculateOutput(2);
    //assert
    expect(res).toEqual("2");
}
});
