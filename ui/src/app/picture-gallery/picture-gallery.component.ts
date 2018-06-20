import { Component, OnInit } from '@angular/core';
import {Picture} from '../picture/picture.model';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.css']
})
export class PictureGalleryComponent implements OnInit  {
  // pictures:Picture[];
  pictures: Picture[];

  constructor() { 
    //this.pictures = ['Ari', 'Carlos', 'Felipe', 'Nate']
     this.pictures = [ new Picture('1.jpg','assets/images/gallery/1.jpg',20),
                       new Picture('2.jpg','assets/images/gallery/2.jpg',22),
                       new Picture('3.jpg','assets/images/gallery/3.jpg',23)
                     ]
   }

  ngOnInit() {
  }

}
