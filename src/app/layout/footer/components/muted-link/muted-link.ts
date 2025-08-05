import { Component } from '@angular/core';

@Component({
  selector: 'a[mutedLink]',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'hover:text-text-default text-text-muted inline-block transition-all duration-300'
  }
})
export class MutedLink {}
