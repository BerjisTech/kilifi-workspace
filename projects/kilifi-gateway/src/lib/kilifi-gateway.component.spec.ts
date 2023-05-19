import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KilifiGatewayComponent } from './kilifi-gateway.component';

describe('KilifiGatewayComponent', () => {
  let component: KilifiGatewayComponent;
  let fixture: ComponentFixture<KilifiGatewayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KilifiGatewayComponent]
    });
    fixture = TestBed.createComponent(KilifiGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
