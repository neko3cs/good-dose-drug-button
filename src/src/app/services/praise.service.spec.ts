import { TestBed } from '@angular/core/testing';
import { PraiseService } from './praise.service';

describe('PraiseService', () => {
  let service: PraiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a random praise string', () => {
    const praise = service.getRandomPraise();
    expect(praise).toBeTruthy();
    expect(typeof praise).toBe('string');
    expect(praise.length).toBeGreaterThan(0);
  });
});
