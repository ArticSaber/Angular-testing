import { Component } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TestComponent, FormsModule],
})
export class AppComponent {
  title = 'my-first-project';
  name: string = 'John Doe';
  age: number = 30;
  address: string = '123 Main St';
  email: string = '';

  onEmailChange(event: any) {
    console.log(this.email);
  }
}