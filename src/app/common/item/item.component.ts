import { Component, Input } from '@angular/core';
import { ProductComponent } from '../../pages/product/product.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input()
  public productInfo:any = null;
}
