import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-err-popup',
  templateUrl: './err-popup.component.html',
  styleUrls: ['./err-popup.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() message: any;
  @Input() type:any;
  imgSrc:any;
  constructor() {
    
   }

  ngOnInit() {
    this.imgSrc="/assets/imgs/" + this.type +".gif";
  }

}
