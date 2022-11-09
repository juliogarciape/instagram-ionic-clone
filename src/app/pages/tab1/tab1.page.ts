import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public photos:any=[];

  constructor(private photoService: PhotosService) {}

  ngOnInit(){
    this.photoService.getTopHeadLines()
    .subscribe(data => {
      this.photos.push(...[data]);
      console.log(this.photos)
    })
  }

}
