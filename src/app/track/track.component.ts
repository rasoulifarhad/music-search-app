import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  id?: string;
  track?: any;

  constructor(private spotify: SpotifyService, private route: ActivatedRoute, private location: Location) {
    route.params.subscribe( params => { this.id = params['id'];});
  }
  ngOnInit(): void {
    if(this.id) {
      this.spotify
          .getTrack(this.id)
          .subscribe((res: any) => this.renderTrack(res));
}
  }

  renderTrack(res: any): void {
    this.track = res;
  }

  back() : void {
    this.location.back();
  }

}
