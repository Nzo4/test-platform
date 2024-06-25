import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Question } from 'src/app/models/question.model';
import { PossibleAnswer } from 'src/app/models/answer.model';
import { ResultService } from 'src/app/services/result.service';
import { TestingService } from 'src/app/services/testing.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class MainMenuComponent implements OnInit {
  constructor(
    private resultService: ResultService,
    private testingService: TestingService,
    private router: Router,
  ) { }

  @Output() isEnd = new EventEmitter<boolean>();
  questionArr!: Question[];
  currentIndex: number = 1;
  questionLength: number = 0;
  endTest: boolean = false;
  currentAnswer = false;
  answerSelected: boolean = false;
  screenHeight!: number;

  ngOnInit(): void {
    this.questionLength = this.testingService.questionsLength;
    this.questionArr = this.testingService.questionArr;
    if (this.questionArr === undefined) {
      this.router.navigate(['']);
    }
  };

  nextQuestion() {
    if (this.currentIndex < this.questionArr.length - 1) {
      this.currentIndex++;
      this.answerSelected = false;
    } else {
      this.endTest = true;
    }
  }

  checkedAnswer(answer: PossibleAnswer) {
    if (this.answerSelected) {
      return;
    }
    this.currentAnswer = answer.isAnswer;
    this.questionArr[this.currentIndex].possibleAnswers.forEach(a => {
      a.selected = false;
    });
    answer.selected = true;

    if (!answer.isAnswer) {
      const correctAnswer = this.questionArr[this.currentIndex].possibleAnswers.find(a => a.isAnswer);
      if (correctAnswer) {
        correctAnswer.selected = true;
        this.resultService.incrementFalseAnswer();
      }
    } else {
      this.resultService.incrementTrueAnswer();
    }
    this.answerSelected = true;

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  }

  endTesting() {
    this.router.navigate(['result'])
  }
}
