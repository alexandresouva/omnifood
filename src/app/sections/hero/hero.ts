import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html'
})
export class Hero {
  protected readonly customerImagesId = Array.from(
    { length: 6 },
    (_, i) => i + 1
  );
}
