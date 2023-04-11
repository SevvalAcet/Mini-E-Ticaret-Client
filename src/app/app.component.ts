import { Component } from '@angular/core';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';
import { Position } from './services/admin/alertify.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message('Uyarı', 'Başarısız', {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopCenter,
    });
  }
}
