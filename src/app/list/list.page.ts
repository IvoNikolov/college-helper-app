import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  products: Product[] = [new Product(1, 'Milk', new Date('2020-03-16') )];

  constructor() {

  }

  ngOnInit() {
  }
}
