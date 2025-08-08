import { Component, input } from '@angular/core';

import { Link } from '@layout/footer/models/link.model';
import { MutedLink } from '@layout/footer/components/muted-link/muted-link';

@Component({
  selector: 'app-link-section',
  imports: [MutedLink],
  template: `
    <nav [attr.aria-labelledby]="id">
      <h3 class="mb-8 text-sm font-medium lg:mb-10 lg:text-lg" [id]="id">
        {{ title() }}
      </h3>
      <ul class="flex flex-col gap-6">
        @for (link of links(); track $index) {
          <li>
            <a mutedLink [href]="link.href">{{ link.name }}</a>
          </li>
        }
      </ul>
    </nav>
  `
})
export class LinkSection {
  protected readonly id = crypto.randomUUID();

  readonly title = input.required<string>();
  readonly links = input.required<Link[]>();
}
