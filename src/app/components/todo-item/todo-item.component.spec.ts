import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemComponent } from './todo-item.component';

describe('AddTodoItemComponent', () => {
  let component: AddTodoItemComponent;
  let fixture: ComponentFixture<AddTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
