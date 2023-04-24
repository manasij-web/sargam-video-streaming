import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  url: string = "/client/home";
  userName: string = '';
  constructor(
    private Service :VideoService,
    private router:Router
  ) {
    if (this.Service.getClientName() !== null) {
      this.userName = this.Service.getClientName();
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
    if (link === '/client/logout') {
      this.Service.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }
 

}
