import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiComponent } from './ami.component';

describe('AmiComponent', () => {
  let component: AmiComponent;
  let fixture: ComponentFixture<AmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
