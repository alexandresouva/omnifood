import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from './models/link.model';
import { MutedLink } from './components/muted-link/muted-link';
import { LinkSection } from './components/link-section/link-section';

type PageCategory = 'account' | 'company' | 'resources';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, LinkSection, MutedLink],
  templateUrl: './footer.html'
})
export class Footer {
  protected readonly socialMedia = [
    { name: 'Instagram', icon: faInstagram, href: '#' },
    { name: 'Facebook', icon: faFacebook, href: '#' },
    { name: 'Twitter', icon: faTwitter, href: '#' }
  ];

  protected readonly companyPages: Record<PageCategory, Link[]> = {
    account: [
      { name: 'Create account', href: '#' },
      { name: 'Sign in', href: '#' },
      { name: 'iOS app', href: '#' },
      { name: 'Android app', href: '#' }
    ],
    company: [
      { name: 'About us', href: '#' },
      { name: 'For Business', href: '#' },
      { name: 'Cooking partners', href: '#' },
      { name: 'Contact us', href: '#' }
    ],
    resources: [
      { name: 'Recipe directory', href: '#' },
      { name: 'Help center', href: '#' },
      { name: 'Privacy & terms', href: '#' }
    ]
  };
}
