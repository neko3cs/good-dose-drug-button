import { TestBed } from '@angular/core/testing';
import { DoseButtonComponent } from './dose-button.component';
import { PraiseService } from './praise.service';

describe('DoseButtonComponent', () => {
  let praiseService: PraiseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoseButtonComponent],
      providers: [PraiseService],
    }).compileComponents();

    praiseService = TestBed.inject(PraiseService);
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DoseButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should show "お薬を飲みました！" button initially', () => {
    const fixture = TestBed.createComponent(DoseButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.main-button')?.textContent).toContain('お薬を飲みました！');
  });

  it('should show praise message after clicking takeDose', () => {
    const fixture = TestBed.createComponent(DoseButtonComponent);
    const component = fixture.componentInstance;
    
    component.takeDose();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.praise-message')).toBeTruthy();
    expect(component.praise()).not.toBeNull();
  });

  it('should reset when reset button is clicked', () => {
    const fixture = TestBed.createComponent(DoseButtonComponent);
    const component = fixture.componentInstance;
    
    component.takeDose();
    fixture.detectChanges();
    
    component.reset();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.main-button')).toBeTruthy();
    expect(component.praise()).toBeNull();
  });
});
