import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {
  isVisible !: boolean | null;
  isEnd !: boolean;


  changeVisibilityTest(test: boolean) {
    this.isVisible = true;
  }

  changeVisibilityEnd(end: boolean) {
    this.isEnd = true;
    this.isVisible = null;
  }
}
