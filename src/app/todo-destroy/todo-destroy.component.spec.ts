import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDestroyComponent } from './todo-destroy.component';

describe('TodoDestroyComponent', () => {
  let component: TodoDestroyComponent;
  let fixture: ComponentFixture<TodoDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDestroyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
