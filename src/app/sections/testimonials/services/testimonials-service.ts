import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestimonialData } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  testimonials(): Observable<TestimonialData[]> {
    return of([
      {
        name: 'Dave Bryson',
        imageUrl: 'images/customers/dave.jpg',
        text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.'
      },
      {
        name: 'Ben Hadley',
        imageUrl: 'images/customers/ben.jpg',
        text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
      },
      {
        name: 'Steve Miller',
        imageUrl: 'images/customers/steve.jpg',
        text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
      },
      {
        name: 'Hannah Smith',
        imageUrl: 'images/customers/hannah.jpg',
        text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.'
      }
    ]);
  }
}
