import { Component,numberAttribute,OnInit} from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent{
  username=new FormControl('')
  item=new FormControl('')
  quantity=new FormControl('')
  products:any=["Tomato","Jam","Smokies"]
  prices:any=[20,300,450]
  quantities:any=[3,1,3]
  price:any=new FormControl('')
  total?:number
  subTotal?:number
  users?:any[];
  noUser?:boolean=true
  notSubmitted?:boolean=true
  count:number=0
  addItem (): void {
    this.notSubmitted=false
    this.products.push(this.item)
    this.quantities.push(this.quantity)
    this.prices.push(this.price)
    }

  addUser():void{
    this.noUser=false
  }

    
}




