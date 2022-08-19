import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:any[]=[]
  tv:any[]=[]
  person:any[]=[]
  imgSrc:string='https://image.tmdb.org/t/p/w500'

  term:string=''




 

  constructor(private _AuthService:AuthService  ,private _MoviesService:MoviesService) { }
 

  ngOnInit(): void {
    
    this._MoviesService.getTrendingData('movie').subscribe(
      (res)=>{
        this.movies =res.results.slice(0,10)
        console.log(res.results)
      }
    )
    this._MoviesService.getTrendingData('tv').subscribe(
      (res)=>{
        this.tv =res.results.slice(0,10)
        console.log(res.results)
      }
    )
    this._MoviesService.getTrendingData('person').subscribe(
      (res)=>{

        
        for (let i = 0; i < res.results.length; i++) {
          if (res.results[i].profile_path == null && res.results[i].gender ==1  ) {
           res.results[i].profile_path = '../../assets/imges/images.jfif'
           
          }
          else if (res.results[i].profile_path == null && res.results[i].gender ==0  ) {
            res.results[i].profile_path = '../../assets/imges/images.png'
            
           }
          else{
            res.results[i].profile_path =this.imgSrc+this.imgSrc+res.results[i].profile_path
            
          }
          
        }
        
        this.person =res.results.slice(0,10)

        // this.person =res.results.slice(0,10)
        console.log(res.results)
      }
    )
    
  }


}
function elseIf(arg0: boolean) {
  throw new Error('Function not implemented.');
}

