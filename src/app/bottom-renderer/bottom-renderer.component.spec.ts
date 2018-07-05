import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRendererComponent } from './bottom-renderer.component';

describe('BottomRendererComponent', () => {
  let component: BottomRendererComponent;
  let fixture: ComponentFixture<BottomRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
