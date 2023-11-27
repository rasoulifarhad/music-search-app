import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id!: string;
  artist: any;

  constructor(private location: Location, private route: ActivatedRoute, private spotify: SpotifyService) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.spotify
            .getArtist(this.id)
            .subscribe( (res: any) => this.renderArtist(res));
  }


  renderArtist(res: any): void {
    this.artist = res;
  }

  back() {
    this.location.back();
  }
}
