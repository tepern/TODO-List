import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

    todos: Todo[] = [{'id':'1', 'title':'First Task', 'completed': false, 'createdAt':new Date}, {'id':'2', 'title':'Second Task', 'completed':false, 'createdAt':new Date}, {'id':'3', 'title':'Third Task', 'completed':false, 'createdAt':new Date}];

    newTodo: Todo = new Todo();
    editing: boolean = false;
    editingTodo: Todo = new Todo();

    ngOnInit(): void {
        this.getTodos();
    }

    getTodos(): void {

    }

    createTodo(todoForm: NgForm): void {
        //this.todos.unshift(new Todo(this.todos.length+1,this.newTodo.title,new Date,false));
        let createTodo = this.newTodo;
        this.newTodo = new Todo();
        this.todos.unshift(createTodo);
    }

    deleteTodo(id: string): void {
        this.todos = this.todos.filter(todo => todo.id != id); 
        console.log(this.todos); 
    }

    updateTodo(todoData: Todo): void {
        let updatedTodo = todoData;
        let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
        this.clearEditing(); 
    }

    toggleCompleted(todoData: Todo): void {
        todoData.completed = !todoData.completed;
        let updatedTodo = todoData;
        console.log(updatedTodo);
        let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
    }

    editTodo(todoData: Todo): void {
        this.editing = true;
        Object.assign(this.editingTodo, todoData);
    }

    clearEditing(): void {
         this.editingTodo = new Todo();
         this.editing = false;
    }
}