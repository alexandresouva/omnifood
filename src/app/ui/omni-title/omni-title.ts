import { Component, computed, input } from '@angular/core';

type TitleType = 'primary' | 'secondary' | 'tertiary' | 'subheading';

const titleTypeClassMap: Record<TitleType, string> = {
  primary:
    'text-text-strong text-4xl xl:text-5xl leading-[1.05] font-bold tracking-[-0.5px]',
  secondary:
    'text-text-strong text-3xl lg:text-4xl xl:text-5xl leading-[1.2] font-bold tracking-[-0.5px]',
  tertiary:
    'text-text-strong text-xl lg:text-2xl xl:text-3xl leading-[1.2] font-bold tracking-[-0.5px]',
  subheading:
    'text-primary-hover text-sm block font-medium tracking-[0.75px] uppercase'
};

@Component({
  selector: '*[omniTitle]',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'titleClass()'
  }
})
export class OmniTitle {
  type = input.required<TitleType>();

  protected readonly titleClass = computed(
    () => titleTypeClassMap[this.type()] ?? 'text-text-strong'
  );
}
