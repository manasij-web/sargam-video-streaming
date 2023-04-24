import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-admin-uploadvideo',
  templateUrl: './admin-uploadvideo.component.html',
  styleUrls: ['./admin-uploadvideo.component.scss']
})
export class AdminUploadvideoComponent  implements OnInit {

  category: string = '2';
  fileToUpload: File | null = null;
  constructor(
    private service: VideoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(file: any): void {
    this.fileToUpload = file?.files[0];
  }

  onSubmit(): void {
    this.service.uploadFile(this.fileToUpload, this.category).subscribe((res: any) => {
      if (!!res && res?.fileDownloadUri) {
        alert("Successfully uploaded video.");
        this.router.navigate(['/']);
      }
    });
  }

}

