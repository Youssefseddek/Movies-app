import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingData(media:string):Observable<any>{

    return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)


  }

  getmovieDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)
  }

}
