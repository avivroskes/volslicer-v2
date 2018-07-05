import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleRendererComponent } from './middle-renderer.component';

describe('MiddleRendererComponent', () => {
  let component: MiddleRendererComponent;
  let fixture: ComponentFixture<MiddleRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
