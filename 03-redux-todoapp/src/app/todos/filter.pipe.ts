import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { ValidFilters } from './filters/filter.actions';

@Pipe({
    name: 'todoFilter',
    standalone: false
})
export class FilterPipe implements PipeTransform {

    transform(todos: Todo[] | null, filter: ValidFilters | null): Todo[] {
        if (!todos) return [];
        if (!filter) return todos; // Si no hay filtro, retorna todos

        switch (filter) {
            case 'completed':
                return todos.filter(todo => todo.isCompleted);
            case 'pending':
                return todos.filter(todo => !todo.isCompleted);
            default:
                return todos;
        }
    }
}
