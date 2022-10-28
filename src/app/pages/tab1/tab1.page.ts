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
      console.log(data[0])
      //this.photos.push(...res);
      this.photos.push(data[0])
      this.photos.push(data[1])
      this.photos.push(data[2])
      this.photos.push(data[3])
      this.photos.push(data[4])
      this.photos.push(data[5])

    })
  }

}
