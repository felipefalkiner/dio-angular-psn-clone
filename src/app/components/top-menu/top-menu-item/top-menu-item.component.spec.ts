import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuItemComponent } from './top-menu-item.component';

describe('TopMenuItemComponent', () => {
  let component: TopMenuItemComponent;
  let fixture: ComponentFixture<TopMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
