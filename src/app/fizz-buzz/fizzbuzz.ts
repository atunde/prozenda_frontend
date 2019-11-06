import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FizzBuzz {

    fizzBuzz() {
        let i = 1;
        let output: string;
        while (i <= 100) {
            console.log(this.returnOutput(i));
        }
    }

    returnOutput(value: number) {
        if (this.isMultipleOfThreeAndFive(value)) {
            return "FizzBuzz";
        }
        if (this.isMultipleOfThree(value)) {
            return "Fizz";
        }
        if (this.isMultipleOfFive(value)) {
            return "Buzz";
        }
        return value;
    }

    isMultipleOfThreeAndFive(value: number): boolean {
        return value % 3 === 0 && value % 5 === 0;
    }
    
    isMultipleOfThree(value: number): boolean {
            return value % 3 === 0;
    }

    isMultipleOfFive(value: number): boolean {
        return value % 5 === 0;
    }
}