import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { VideoService } from './video.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sargam-upload-download';
  isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  constructor(
    private Service:VideoService,
    private router:Router
  ){
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (this.Service.getUserAuthorization() !== null) {
        setTimeout(() => {
          this.isLoggedIn = true;
          this.isAdminLoggedIn = false;
        }, 100);
      } else {
        if (this.Service.getAdminAuthorization() !== null) {
          setTimeout(() => {
            this.isAdminLoggedIn = true;
            this.isLoggedIn = false;
          }, 100);

        } {
          setTimeout(() => {
            this.isLoggedIn = false;
            this.isAdminLoggedIn = false;
          }, 1);
        }
      }
    });
}
gotURL(url: string) {
  this.router.navigate([url]);
}
}