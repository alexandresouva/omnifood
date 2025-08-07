import { Component } from '@angular/core';

import { OmniTitle } from '../../ui/omni-title/omni-title';
import { OmniButton } from '../../ui/omini-button/omni-button';

@Component({
  selector: 'app-hero',
  imports: [OmniTitle, OmniButton],
  templateUrl: './hero.html'
})
export class Hero {
  protected readonly customerImagesId = Array.from(
    { length: 6 },
    (_, i) => i + 1
  );
}
