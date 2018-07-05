import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRendererComponent } from './top-renderer.component';

describe('TopRendererComponent', () => {
  let component: TopRendererComponent;
  let fixture: ComponentFixture<TopRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
