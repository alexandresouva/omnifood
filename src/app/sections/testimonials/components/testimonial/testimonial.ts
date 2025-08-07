import { Component, input } from '@angular/core';

import { TestimonialData } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html'
})
export class Testimonial {
  testimonial = input.required<TestimonialData>();
}
