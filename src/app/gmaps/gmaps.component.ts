import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})
export class GmapsComponent implements OnInit {
  lat: number = 13.424547;
  lng: number = -87.446694;

  constructor() { }

  ngOnInit() {
  }

}
