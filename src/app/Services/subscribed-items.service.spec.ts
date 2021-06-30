import { TestBed } from '@angular/core/testing';

import { SubscribedItemsService } from './subscribed-items.service';

describe('SubscribedItemsService', () => {
  let service: SubscribedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
