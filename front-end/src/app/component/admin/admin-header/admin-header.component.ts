import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit{
  url: string = '';
  userName: string = '';
  constructor(
    private Service :VideoService,
    private router:Router,
    private changeDetector: ChangeDetectorRef
  ) {
    if (this.Service.getAdminName() !== null) {
      this.userName = this.Service.getAdminName();
    }
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
}
 
routerToLink(link: string): void {
  if (link === '/admin/logout') {
     this.Service.clientLogout();
    return;
  }
  this.router.navigate([link]);
}

}
