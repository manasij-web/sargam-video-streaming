import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  logo: string = '.jpg';
  images = [
    '../../../assets/images/k-pop.JPG',
    '../../../assets/images/love dose.JPG',
    '../../../assets/images/genre love.JPG',
    '../../../assets/images/stories.JPG',
    '../../../assets/images/fresh.JPG',
    '../../../assets/images/song1.JPG'
  ];

  constructor(config: NgbCarouselConfig, private route: Router) {
    config.interval = 500;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}

  gotoLogin(): void {
    this.route.navigate(['/client-login']);
  }
  
}
