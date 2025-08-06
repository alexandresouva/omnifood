import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  imports: [],
  templateUrl: './featured.html'
})
export class Featured {
  protected readonly companiesLogos = [
    { src: 'images/logos/techcrunch.png', alt: 'Techcrunch logo' },
    { src: 'images/logos/business-insider.png', alt: 'Business Insider logo' },
    {
      src: 'images/logos/the-new-york-times.png',
      alt: 'The New York Times logo'
    },
    { src: 'images/logos/forbes.png', alt: 'Forbes logo' },
    { src: 'images/logos/usa-today.png', alt: 'USA Today logo' }
  ] satisfies {
    src: string;
    alt: string;
  }[];
}
