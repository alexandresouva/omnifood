import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero],
  template: `
    <app-header />
    <main>
      <app-hero />
    </main>
    <app-footer />
  `
})
export class App {}
