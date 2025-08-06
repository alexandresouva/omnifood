import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Featured } from './sections/featured/featured';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, Featured],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-featured />
    </main>
    <app-footer />
  `
})
export class App {}
