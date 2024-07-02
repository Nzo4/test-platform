import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ptm } from 'src/app/constants/ptmData';
import { biot } from 'src/app/constants/questionsData';
import { ResultService } from 'src/app/services/result.service';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent {

  constructor(
    private testingService: TestingService,
    private router: Router,
    private resultService: ResultService
  ) { }

  @Input() titleTest !: string;
  @Input() imgTest !: string;
  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  pathsTests = [
    { path: '/biot', src: 'src/app/constants/questionsData' },
    { path: '/ptm', src: 'src/app/constants/questionsPtm' }
  ]


  startTest() {
    this.checkPath();
    this.router.navigate(['/test']);
  }

  checkPath() {
    switch (this.router.url) {
      case '/biot': {
        this.testingService.startTest(biot);
        if (this.testingService.isMax) {
          this.testingService.questionsLength = this.testingService.questionArr.length;
          this.resultService.refresh();
        } else {
          this.testingService.questionsLength = 50;
          this.resultService.refresh();
        }

        break;
      }
      case '/ptm': {
        this.testingService.startTest(ptm);
        if (this.testingService.isMax) {
          this.testingService.questionsLength = this.testingService.questionArr.length;
          this.resultService.refresh();
        } else {
          this.testingService.questionsLength = 20;
          this.resultService.refresh();
        }
        break;
      }
    }

  }

}
