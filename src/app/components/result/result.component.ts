import { Component, OnChanges, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  constructor(public resultService: ResultService) { }

  reloadPage() {
    location.reload();
  }
}
