import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Video } from 'src/app/modal/video.modal';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
 
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
      this.router.navigate(['/user/watch/' + video?.videoId]);
    }
  
    onChangeToggle(ev: any): void {
      console.log('>>>>>', ev)
      this.selectedItem = ev?.value;
      this.getVideoList();
    }
  
  }
  
