import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  template: `
    <app-header />
    <main></main>
    <app-footer />
  `
})
export class App {}
