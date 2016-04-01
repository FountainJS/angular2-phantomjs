import {Component} from 'angular2/core';
import axios from 'axios';
import {Tech} from './tech.js';

@Component({
  selector: 'Techs',
  template: `
    <div class="techs-container">
      <h2 class="techs-h2">
        Cooked with all these awesome technologies:
      </h2>
      <div class="techs">
        <Tech *ngFor="#tech of techs" [tech]="tech"></Tech>
      </div>
    </div>
  `,
  directives: [Tech]
})
export class Techs {
  constructor() {
    axios
      .get('src/app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
  }
}
