import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';




@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  idDetail:string=''
  movieDetails:any
  imgSrc:string='https://image.tmdb.org/t/p/w500'

  constructor(private _MoviesService:MoviesService ,private _ActivatedRoute:ActivatedRoute) {
  this.idDetail=  _ActivatedRoute.snapshot.params['id']
  console.log( this.idDetail)
   }

  ngOnInit(): void {
    this._MoviesService.getmovieDetails(this.idDetail).subscribe((res)=>{
      this.movieDetails=res
      console.log(res)
    })
  }

}
