import { Component, OnInit, Input } from '@angular/core';
import {Picture} from './picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() pic:Picture;
 //@Input() pic:string;
 
  constructor() {
    
  }

  ngOnInit() {
  }

}
