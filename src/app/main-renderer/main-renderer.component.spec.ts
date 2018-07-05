import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRendererComponent } from './main-renderer.component';

describe('MainRendererComponent', () => {
  let component: MainRendererComponent;
  let fixture: ComponentFixture<MainRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
