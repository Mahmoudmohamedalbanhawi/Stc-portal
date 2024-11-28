import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authflowGuard } from './authflow.guard';

describe('authflowGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authflowGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
