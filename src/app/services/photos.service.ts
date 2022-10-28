import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photosresponse } from '../interfaces';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
    return this.http.get<Photosresponse>('https://api.unsplash.com/photos/random?count=20',{
      params:{
        client_id: apiKey
      }
    })
  }

}
