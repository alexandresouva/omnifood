import { Component, computed, input } from '@angular/core';

type ButtonFormat = 'primary' | 'outline';

const buttonClassMap: Record<ButtonFormat, string> = {
  primary:
    'bg-primary hover:bg-primary-hover focus:bg-primary-focus text-white',
  outline:
    'text-text-default hover:bg-bg-surface bg-white shadow-[inset_0_0_0_3px_#fff]'
};

@Component({
  selector: 'button[omniButton], a[omniButton]',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'inline-block rounded-lg px-8 py-4 text-xl leading-none font-semibold transition-all duration-300',
    '[class]': 'buttonClass()'
  }
})
export class OmniButton {
  format = input<ButtonFormat>('primary');

  protected readonly buttonClass = computed(
    () => buttonClassMap[this.format()] ?? 'bg-gray-300'
  );
}
