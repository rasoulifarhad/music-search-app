import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  id?: string;
  track?: any;

  constructor(private spotify: SpotifyService) {

  }
  ngOnInit(): void {
    if(this.id) {
      this.spotify
          .getTrack(this.id)
          .subscribe((res: any) => this.renderTrack(res));
}
  }

  renderTrack(res: any): void {
    if(res) {
      this.track = res;
    }
  }

  back() : void {

  }

}
