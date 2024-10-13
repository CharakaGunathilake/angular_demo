import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.css'
})
export class ProductRegistrationComponent {
    product = {
      name: "",
      description: ""
    }

    register(){
      console.log(this.product);
    }
}
