import { Component } from '@angular/core';

@Component({
  selector: 'app-components-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  standalone: true,
})
export class TestComponent {
  title = 'hello world';
}
