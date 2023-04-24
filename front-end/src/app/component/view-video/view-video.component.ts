import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {

  id: string = '';
  url: string = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private service: VideoService
  ) {
    this.url = this.service.url;
    this.activatedRouter.params.subscribe((res: any) => {
      if (!!res && res?.id) {
        this.id = res?.id;
      }
    });
  }

  ngOnInit(): void {
  }

}
