import { Component } from '@angular/core';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Featured } from './sections/featured/featured';
import { Meals } from './sections/meals/meals';
import { Testimonials } from './sections/testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, Featured, Meals, Testimonials],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-featured />
      <app-meals />
      <app-testimonials />
    </main>
    <app-footer />
  `
})
export class App {}
