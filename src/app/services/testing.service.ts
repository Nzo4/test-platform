import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { ResultService } from './result.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  questionArr!: Question[];
  questionsLength: number = 0;
  screenHeight!: number;
  isMax: boolean = false;

  constructor(private resultService: ResultService, private router: Router) { }

  startTest(testData: Question[]) {
    this.questionArr = this.shuffleArray(testData);
    this.resultService.questionCounter = this.questionArr.length;
    this.screenHeight = window.innerHeight;
  }

  shuffleArray(arr: Question[]) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      this.shuffleAnswers(arr[j]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  shuffleAnswers(question: Question) {
    return question.possibleAnswers.sort(() => Math.random() - 0.5);
  }

  changeMaxQuestion() {
    this.isMax = true;
  }
  changeNormalQuestion() {
    this.isMax = false;
  }
}
