import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  routes: Route[] = [];
  constructor(private router: Router) { }


  ngOnInit(): void {
    this.routes = this.router.config.filter(route => route.path && route.path !== 'test' && route.path !== 'result')
  }

}
