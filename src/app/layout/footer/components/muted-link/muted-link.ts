import { Component } from '@angular/core';

@Component({
  selector: 'a[mutedLink]',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'hover:text-text-default text-text-muted inline-block transition-all duration-300 text-xs sm:text-sm lg:text-base'
  }
})
export class MutedLink {}
