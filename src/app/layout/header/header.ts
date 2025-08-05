import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly links = [
    { label: 'How it works', href: '#' },
    { label: 'Meals', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Pricing', href: '#' }
  ] satisfies { label: string; href: string }[];
}
