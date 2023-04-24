import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Video } from 'src/app/modal/video.modal';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  videoList: Array<Video> = [];
  user: any = {};
  getCategoryList: any[] = [];
  category: any = 100;
  allVideoList : Array<Video>= [];
  offset: number = 0;
  pageSize: number = 10; // How many item you want to display in your page.
  totalItem: number = 1;

  constructor(
    private Service: VideoService,
    private router: Router,
    
  ) {
   this.Service.isUserLoginPresent();
    this.getVideoList(true);
    this.getUserDetail();
  }


  ngOnInit(): void {
    this.getCategoryList = this.Service.getCategoryList();
  }

  getUserDetail(): void {
    const uid = this.Service.getUserAuthorization();
    this.Service.getUserById(uid).pipe(take(1)).subscribe(
      (res: any) => {
        console.log("User*****", res);
        if (!!res && res?.customerId) {
          this.user = res;
        }
      }, err => {
        console.log("Err");
      }
    )
  }

  getVideoList(isAllVideo: boolean = false): void {
    let product: any = this.Service.getAllVideos(this.offset - 1 < 0 ? 0 : this.offset - 1, this.pageSize);
    if (!isAllVideo) {
      product = this.Service.getVideoByCategory(this.category);
    }
    product.pipe(take(1)).subscribe((res: any) => {
      ;
      if (res && res?.product && Array.isArray(res?.product)) {
        this.videoList = res?.video;
        this.allVideoList = res?.video;
        this.totalItem = res?.totalVideo;
      }
    }, (err: any) => {
      console.log("Error");
    });
  }

  addToWishlist(video: Video): void {
    const element: any = document.getElementById(video?.videoId.toString());
    
    const body: any = {
      video: video,
      user: this.user
    };
    console.log("add to wishlist", body);
    this.Service.addToWishlist(body, video?.videoId, this.user?.userId).pipe(take(1)).subscribe(
      (res: any) => {
        console.log(res);
        if (!!res && res?.cartId) {
        alert("Item added sucessfully");
          this.getVideoList();
        }
      }, err => {
        console.log("Error");
      }
    )
  }

  getProductByCategory(): void {
    this.offset = 0;
    this.totalItem = 1;
    if (this.category === "100") {
      this.getVideoList(true);
    } else {
      this.getVideoList(false);
    }
  }

  onNextPageClick(pageOffSet: any): void {
    this.offset = pageOffSet;
    this.getVideoList(this.category === 100 || this.category === "100");
  }

  onPreviousPageClick(pageOffSet: any): void {
    this.offset -= 1;
    this.getVideoList(this.category === 100 || this.category === "100");
  }

  onFirstPageClick(pageOffSet: any): void {
    this.offset = 0;
    this.getVideoList(this.category === 100 || this.category === "100");
  }

  onLastPageClick(pageOffSet: any): void {
    const lastPage = Math.ceil(this.totalItem / this.pageSize);
    this.offset = lastPage;
    this.getVideoList(this.category === 100 || this.category === "100");
  }

}




