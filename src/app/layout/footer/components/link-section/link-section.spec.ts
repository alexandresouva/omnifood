import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkSection } from './link-section';

describe('LinkSection', () => {
  let component: LinkSection;
  let fixture: ComponentFixture<LinkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSection]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
