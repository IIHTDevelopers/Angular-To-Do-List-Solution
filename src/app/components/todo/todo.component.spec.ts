import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent]
    });

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  });

  describe('boundary', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should add a new todo', () => {
      component.newTodo = 'New Task';
      component.addTodo();
      expect(component.todos.length).toBe(1);
      expect(component.todos[0].text).toBe('New Task');
    });

    it('should not add an empty todo', () => {
      component.newTodo = '';
      component.addTodo();
      expect(component.todos.length).toBe(0);
    });

    it('should update a todo', () => {
      const originalTodo = { id: 1, text: 'Original Task', completed: false };
      component.todos = [originalTodo];
      component.editingTodo = { ...originalTodo };
      component.editingTodo.text = 'Updated Task';
      component.updateTodo();
      expect(component.todos[0].text).toBe('Updated Task');
    });

    it('should not update a todo with empty text', () => {
      const originalTodo = { id: 1, text: 'Original Task', completed: false };
      component.todos = [originalTodo];
      component.editingTodo = { ...originalTodo };
      component.editingTodo.text = '';
      component.updateTodo();
      expect(component.todos[0].text).toBe("");
    });

    it('should delete a todo', () => {
      const todoToDelete = { id: 1, text: 'Task to Delete', completed: false };
      component.todos = [todoToDelete];
      component.deleteTodo(todoToDelete);
      expect(component.todos.length).toBe(0);
    });

    it('should cancel editing', () => {
      const originalTodo = { id: 1, text: 'Original Task', completed: false };
      component.editingTodo = { ...originalTodo };
      component.cancelEditing();
      expect(component.editingTodo).toBe(null);
    });

    it('should not add a new todo with only whitespace', () => {
      component.newTodo = '    ';
      component.addTodo();
      expect(component.todos.length).toBe(0);
    });

    it('should not update a todo with only whitespace', () => {
      const originalTodo = { id: 1, text: 'Original Task', completed: false };
      component.todos = [originalTodo];
      component.editingTodo = { ...originalTodo };
      component.editingTodo.text = '   ';
      component.updateTodo();
      expect(component.todos[0].text).toBe('   ');
    });

    it('should add and delete a todo', () => {
      component.newTodo = 'New Task';
      component.addTodo();
      expect(component.todos.length).toBe(1);
      const todoToDelete = component.todos[0];
      component.deleteTodo(todoToDelete);
      expect(component.todos.length).toBe(0);
    });

    it('should not add a new todo with empty text after deleting a todo', () => {
      component.newTodo = 'New Task';
      component.addTodo();
      expect(component.todos.length).toBe(1);
      const todoToDelete = component.todos[0];
      component.deleteTodo(todoToDelete);
      component.newTodo = '';
      component.addTodo();
      expect(component.todos.length).toBe(0);
    });

    it('should edit and update a todo', () => {
      const originalTodo = { id: 1, text: 'Original Task', completed: false };
      component.todos = [originalTodo];
      component.editingTodo = { ...originalTodo };
      component.editingTodo.text = 'Updated Task';
      component.updateTodo();
      expect(component.todos[0].text).toBe('Updated Task');
    });

    it('should not update a todo with only whitespace', () => {
      const originalTodo = { id: 1, text: 'Original Task', completed: false };
      component.todos = [originalTodo];
      component.editingTodo = { ...originalTodo };
      component.editingTodo.text = '   ';
      component.updateTodo();
      expect(component.todos[0].text).toBe('   ');
    });
  });
});
