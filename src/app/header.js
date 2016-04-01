import {Component} from 'angular2/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
      <p class="header-title">
        <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
          Foutain Generator
        </a>
      </p>
      <p class="header-date">
        Generated with FountainJS v0.2.2 on Fri Apr 01 2016 16:35:32 GMT+0200 (CEST)
      </p>
    </header>
  `
})
export class Header {}
