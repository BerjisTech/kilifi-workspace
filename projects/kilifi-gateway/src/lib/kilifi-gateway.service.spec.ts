import { TestBed } from '@angular/core/testing';

import { KilifiGatewayService } from './kilifi-gateway.service';

describe('KilifiGatewayService', () => {
  let service: KilifiGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KilifiGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
