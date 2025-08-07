import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Testimonial } from './components/testimonial/testimonial';
import { GalleryService } from './services/gallery-service';
import { TestimonialsService } from './services/testimonials-service';

@Component({
  selector: 'app-testimonials',
  imports: [Testimonial],
  templateUrl: './testimonials.html'
})
export class Testimonials {
  private readonly _galleryService = inject(GalleryService);
  private readonly _testimonialsService = inject(TestimonialsService);

  protected readonly photos = toSignal(this._galleryService.photos(), {
    initialValue: []
  });
  protected readonly testimonials = toSignal(
    this._testimonialsService.testimonials(),
    {
      initialValue: []
    }
  );
}
