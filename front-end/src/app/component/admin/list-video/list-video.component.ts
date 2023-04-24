import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Video } from 'src/app/modal/video.modal';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss']
})
export class ListVideoComponent implements OnInit {

  listFiles: Video[] = [];
  selectedItem: string = '1';

  constructor(
    private service: VideoService,
    private router: Router
  ) {
    this.getVideoList();
  }

  getVideoList(): void {
    this.service.getVideoByCategory(this.selectedItem).pipe(take(1)).subscribe((res => {
      if (!!res && Array.isArray(res)) {
        this.listFiles = res;
      }
    }));
  }

  ngOnInit(): void {
  }

  playVideo(video: Video): void {
    this.router.navigate(['/admin/watch/' + video?.videoId]);
  }

  onChangeToggle(ev: any): void {
    console.log('>>>>>', ev)
    this.selectedItem = ev?.value;
    this.getVideoList();
  }

}
