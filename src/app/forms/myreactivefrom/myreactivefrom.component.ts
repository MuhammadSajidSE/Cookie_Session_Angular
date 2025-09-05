import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-myreactivefrom',
  imports: [ReactiveFormsModule],
  templateUrl: './myreactivefrom.component.html',
  styleUrl: './myreactivefrom.component.css'
})
export class MyreactivefromComponent {
   email = new FormControl();
   password = new FormControl();
}
