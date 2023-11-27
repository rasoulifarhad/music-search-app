import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProtectedComponent } from './protected/protected.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { loggedInGuard } from './logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path:'cotactus', redirectTo: 'contact'},
  { path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [loggedInGuard]

  },
  {
    path: 'products',
    component: ProductsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    LoginComponent,
    ProtectedComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
