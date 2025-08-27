import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as todoActions from '../todo.actions';
import * as filterActions from '../filters/filter.actions';
import * as filterSelectors from '../filters/filter.selectors';
import * as todoSelectors from '../todo.selectors';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.html',
  styleUrl: './todo-footer.css'
})
export class TodoFooter {
  actualFilter$: Observable<filterActions.ValidFilters>;
  filters: filterActions.ValidFilters[] = ['all', 'completed', 'pending'];
  pendings$: Observable<number>;
  completed$: Observable<number>;
  hasCompleted$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.actualFilter$ = this.store.select(filterSelectors.selectFilter).pipe(
      startWith('all' as filterActions.ValidFilters)
    );

    this.pendings$ = this.store.select(todoSelectors.selectTodosPending).pipe(
      startWith(0)
    );

    this.completed$ = this.store.select(todoSelectors.selectTodosCompleted).pipe(
      startWith(0)
    );

    // Propiedad boolean más limpia para el template
    this.hasCompleted$ = this.completed$.pipe(
      map(count => count > 0)
    );
  }

  changeFilter(filter: filterActions.ValidFilters): void {
    this.store.dispatch(filterActions.set({ filter: filter }));
  }

  removeCompleted(): void {
    this.store.dispatch(todoActions.removeCompleted());
  }
}
