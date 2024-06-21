import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisteComponent } from './kiste.component';

describe('KisteComponent', () => {
  let component: KisteComponent;
  let fixture: ComponentFixture<KisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
