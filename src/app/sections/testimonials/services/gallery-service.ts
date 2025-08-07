import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  photos(): Observable<{ src: string; alt: string }[]> {
    return of([
      {
        src: 'images/gallery/gallery-1.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-2.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-3.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-4.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-5.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-6.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-7.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-8.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-9.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-10.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-11.jpg',
        alt: 'Photo of beautifully arranged food'
      },
      {
        src: 'images/gallery/gallery-12.jpg',
        alt: 'Photo of beautifully arranged food'
      }
    ]);
  }
}
