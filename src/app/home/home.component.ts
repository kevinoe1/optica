import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import {AppService, IMessage} from '../services/email.service'
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('loader') loader: ElementRef;

  message: IMessage = {};
  mensaje_modal: string;

  constructor(private _AppService: AppService, 
              private _renderer: Renderer2,
              private _toastr: ToastrService) { }

  sendEmail(message: IMessage) {
    
    this._renderer.setStyle(this.loader.nativeElement, 'display', 'block');
    
    this._AppService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
      this._renderer.setStyle(this.loader.nativeElement, 'display', 'none');
      this._toastr.success('Mensaje enviado exitosamente!', 'Éxito');
      this.clear();
    }, error => {
      console.log('AppComponent Error', error);
    })
  };

  clear(){
    // this._renderer.setProperty(this.nombre.nativeElement, 'Value', 'Cute alligator');

    this.message.name = "";
    this.message.email = "";
    this.message.direccion = "";
    this.message.message = "";
    this.message.telefono = "";

  }

  ngOnInit(){
     this._renderer.setStyle(this.loader.nativeElement, 'display', 'none');
     
  }

}
