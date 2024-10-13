import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../../common/item/item.component';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ItemComponent,NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  ngOnInit(): void {
    this.loadProductInfo();
  }
  public productList = [];

  async loadProductInfo(){
    let response = await fetch("https://fakestoreapi.com/products/")
    let body = await response.json()
    this.productList = body
    console.log(this.productList);
    
  }

}
