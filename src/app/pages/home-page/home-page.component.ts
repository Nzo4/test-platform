import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  routes: Route[] = [];
  constructor(private router: Router, public testingService: TestingService) { }


  ngOnInit(): void {
    this.routes = this.router.config.filter(route => route.path && route.path !== 'test' && route.path !== 'result')
  }

  maxQuestion() {
    this.testingService.changeMaxQuestion();
  }

  minQuestion() {
    this.testingService.changeNormalQuestion();
  }

}
