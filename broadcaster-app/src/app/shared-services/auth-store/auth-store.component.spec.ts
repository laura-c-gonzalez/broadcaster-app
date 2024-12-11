import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStoreComponent } from './auth-store.component';

describe('AuthStoreComponent', () => {
  let component: AuthStoreComponent;
  let fixture: ComponentFixture<AuthStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
