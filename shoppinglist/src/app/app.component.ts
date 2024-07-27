import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import{FormsModule} from '@angular/forms'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,FormsModule,ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name='Michael';
  title = 'shoppinglist';
  goShopping:Boolean=false;
  username='';
  useremail='';
  password='';
  cpassword='';
}

