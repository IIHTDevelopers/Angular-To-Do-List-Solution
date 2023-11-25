import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, TodoComponent],
        });
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(app).toBeTruthy();
        });

        it('should display the title', () => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Welcome to My To-Do App');
        });
    });
});
