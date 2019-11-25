import { TestBed, async, inject } from '@angular/core/testing';

import { AccountGaurdGuard } from './account-gaurd.guard';

describe('AccountGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountGaurdGuard]
    });
  });

  it('should ...', inject([AccountGaurdGuard], (guard: AccountGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
