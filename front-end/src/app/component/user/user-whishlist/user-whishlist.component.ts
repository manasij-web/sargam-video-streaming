import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { VideoService } from 'src/app/video.service';
import { OnInit } from '@angular/core';
import { Wishlist } from 'src/app/modal/wishlist.modals';
import * as _ from "lodash";

@Component({
  selector: 'app-user-whishlist',
  templateUrl: './user-whishlist.component.html',
  styleUrls: ['./user-whishlist.component.scss']
})
export class UserWhishlistComponent implements OnInit {
  wishList: Wishlist[] = [];
  wishlistListBackup: Wishlist[] = [];
  user: any = {};
 
  


  constructor(
    private Service: VideoService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.Service.isUserLoginPresent();
    this.getWishlist();
    this.getUserDetail();
  }
 

  ngOnInit(): void {
  }
  getWishlist(): void {
    this.Service.wishlist().pipe(take(1)).subscribe(
      (res: any) => {
        console.log("********", res);
        if (!!res && Array.isArray(res)) {
          const userFilter = res.filter((item: Wishlist)=> item?.user?.userId === parseInt(this.Service.getUserAuthorization()));
          console.log("user filter::::::",userFilter);
          this.wishList = userFilter;
          this.wishlistListBackup =  _.cloneDeep(userFilter);
          if (this.wishList.length > 0) {
            this.wishList.map((item: Wishlist) => {
            })
          }
        }
      }, (err: any) => {
        console.log("error");
      }

    );
  }

  getUserDetail(): void {
    const uid = this.Service.getUserAuthorization();
    this.Service.getUserById(uid).pipe(take(1)).subscribe(
      (res: any) => {
        console.log("User*****", res);
        if (!!res && res?.customerId) {
          this.user = res;
        }
      }, (err: any) => {
        console.log("Err");
      }
    )
  }

  
  
  deleteWishlist(wishlist:Wishlist, showAlert:boolean = true):void{
    this.Service.deleteWishlist(wishlist?.wishlistId).pipe(take(1)).subscribe(
      (res: any) => {
        if (showAlert) {
          alert("Product deleted sucessfully");
        }
       
        this.getWishlist();
      }, (err: any) => {
        console.log("Err");
      }
    )
  }


 

}

