import { Component } from '@angular/core';
import { HeroesComponent} from './heroes.component' 

@Component({
selector: 'my-app',
styleUrls: ['app/app.component.css'],
template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,

})
export class AppComponent  {
title = 'Tour of Heroes'

}