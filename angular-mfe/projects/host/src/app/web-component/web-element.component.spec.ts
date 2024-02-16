import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebElementComponent } from './web-element.component';

describe('WebElementComponent', () => {
  let component: WebElementComponent;
  let fixture: ComponentFixture<WebElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
