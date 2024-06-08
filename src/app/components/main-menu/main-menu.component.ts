import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Question } from 'src/app/models/question.model';
import { questions } from 'src/app/constants/questionsData';
import { PossibleAnswer } from 'src/app/models/answer.model';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class MainMenuComponent implements OnInit {
  constructor(private resultService: ResultService, private scroller: ViewportScroller) { }

  @Output() isEnd = new EventEmitter<boolean>();
  questionArr!: Question[];
  currentIndex: number = 0;
  endTest: boolean = false;
  currentAnswer = false;
  answerSelected: boolean = false;
  screenHeight!: number;

  ngOnInit(): void {
    this.questionArr = this.shuffleArray(questions);
    this.resultService.questionCounter = this.questionArr.length;
    this.screenHeight = window.innerHeight;
  };
  nextQuestion() {
    if (this.currentIndex < this.questionArr.length - 1) {
      this.currentIndex++;
      this.answerSelected = false;
    } else {
      this.endTest = true;
    }
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
    this.isEnd.emit();
  }






}
