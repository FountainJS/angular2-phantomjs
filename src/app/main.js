import {Component} from 'angular2/core';
import {Header} from './header.js';
import {Title} from './title.js';
import {Techs} from './techs/techs.js';
import {Footer} from './footer.js';

@Component({
  selector: 'App',
  template: `
    <div class="main-container">
      <Header></Header>
      <main class="main">
        <TitleComponent></TitleComponent>
        <Techs></Techs>
      </main>
      <Footer></Footer>
    </div>
  `,
  directives: [Header, Title, Techs, Footer]
})
export class Main {}
