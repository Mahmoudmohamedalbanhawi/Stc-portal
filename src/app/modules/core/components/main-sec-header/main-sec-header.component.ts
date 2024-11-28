import { Component, Input } from '@angular/core';

@Component({
  selector: 'stc-main-sec-header',
  templateUrl: './main-sec-header.component.html',
  styleUrl: './main-sec-header.component.scss'
})
export class MainSecHeaderComponent {
  @Input() avatarImage:string = ``;
  @Input() userImage:string = ``;
  @Input() imagewidth!:string;
  @Input() imageheight!:string;
  @Input() levelClass:string = ``;
  @Input() heading:string = ``
}
