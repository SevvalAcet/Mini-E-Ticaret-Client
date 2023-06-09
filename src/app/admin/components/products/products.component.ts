import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent{
  constructor(spinner: NgxSpinnerService,private httpClientService:HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallSpin);
    this.httpClientService.get({
      controller:"products",
    }).subscribe(data=>console.log(data));

    this.httpClientService.post({
      controller:"products"
    },{
     name:"Kalem",
     stock:100,
     price:15
    }).subscribe();
  }
}
