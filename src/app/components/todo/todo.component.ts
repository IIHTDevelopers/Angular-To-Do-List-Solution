import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  editingTodo: Todo | null = null;

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({
        id: this.generateUniqueId(),
        text: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  updateTodo() {
    if (this.editingTodo) {
      const index = this.todos.findIndex((todo) => todo.id === this.editingTodo!.id);
      if (index !== -1) {
        this.todos[index] = { ...this.editingTodo };
        this.editingTodo = null;
      }
    }
  }

  editTodo(todo: Todo) {
    this.editingTodo = { ...todo };
  }

  cancelEditing() {
    this.editingTodo = null;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.editingTodo = null;
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
