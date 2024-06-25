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

  refresh() {
    this.trueAnswerCounter = 0;
    this.falseAnswerCounter = 0;
    this.questionCounter = 0;
  }

}
