import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id!: string;
  album: any;

  constructor(private route: ActivatedRoute, private location: Location, private spotify: SpotifyService) {
    route.params.subscribe(params=> {this.id = params['id'];});
  }

  ngOnInit(): void {
      this.spotify
            .getAlbum(this.id)
            .subscribe((res : any) => this.renderAlbum(res));
  }

  renderAlbum(res: any): void {
    this.album = res;
  }

  back() : void {
    this.location.back();
  }
}
