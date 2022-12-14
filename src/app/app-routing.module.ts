import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'about' ,canActivate:[AuthGuard], component:AboutComponent},
  {path:'movies' ,canActivate:[AuthGuard], component:MoviesComponent},
  {path:'tv' ,canActivate:[AuthGuard], component:TvComponent},
  {path:'people' ,canActivate:[AuthGuard], component:PeopleComponent},
  {path:'movieDetails/:id' ,canActivate:[AuthGuard], component:MovieDetailsComponent},
  {path:'settings' , loadChildren:()=>import ('./settings/settings.module').then((x)=>x.SettingsModule)},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
