import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Testimonial } from '@sections/testimonials/components/testimonial/testimonial';
import { GalleryService } from '@sections/testimonials/services/gallery-service';
import { TestimonialsService } from '@sections/testimonials/services/testimonials-service';
import { OmniTitle } from '@ui/omni-title/omni-title';

@Component({
  selector: 'app-testimonials',
  imports: [Testimonial, OmniTitle],
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
