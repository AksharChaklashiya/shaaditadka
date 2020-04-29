import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallary-form',
  templateUrl: './gallary-form.component.html',
  styleUrls: ['./gallary-form.component.css']
})
export class GallaryFormComponent implements OnInit {

  imageArray;
  visibleImages:any[] = [];
  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit(): void {
  }

}
