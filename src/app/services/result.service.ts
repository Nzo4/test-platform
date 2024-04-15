import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor() { }
  trueAnswerCounter = 0;
  falseAnswerCounter = 0;
  questionCounter = 0;

  incrementTrueAnswer() {
    this.trueAnswerCounter += 1;
  }

  incrementFalseAnswer() {
    this.falseAnswerCounter += 1;
  }

}
