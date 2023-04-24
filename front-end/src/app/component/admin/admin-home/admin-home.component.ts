import { Component } from '@angular/core';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  userName: string = '';
  constructor(
    private Service: VideoService
  ) {
    if (this.Service.getAdminName() !== null) {
      this.userName = this.Service.getAdminName();
    }
    this.Service.isAdminLoginPresent();
  }

  ngOnInit(): void {
  }

}
