import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  trueAnswer: number = 0;
  falseAnswer: number = 0;
  questionsLength: number = 0;
  constructor(public resultService: ResultService, private router: Router, private testingService: TestingService) { }

  ngOnInit(): void {
    this.trueAnswer = this.resultService.trueAnswerCounter;
    this.falseAnswer = this.resultService.falseAnswerCounter;
    this.questionsLength = this.testingService.questionsLength;
  }

  reloadPage() {
    window.location.href = '';
  }
}
