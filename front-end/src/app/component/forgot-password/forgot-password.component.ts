import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit{
  email: string= '';
  isShowChangePassword: boolean = false;
  newPassword: string = '';
  customer: any;
  constructor(
    private service: VideoService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const body = {
      userEmailId: this.email
    };
    this.service.forgotPassword(body).pipe(take(1)).subscribe((res) => {
      if (!!res && res?.userId) {
        this.customer = res;
        this.isShowChangePassword = true;
      } else {
        alert("User not found . Please check email address.")
      }
    }, _err => {
      this.isShowChangePassword = false;
      alert("User not found . Please check email address.")
    });
  }

  onChangePassword(): void {
    this.customer.userPassword = this.newPassword;
    this.service.changePassword(this.customer?.userId,this.newPassword).pipe(take(1)).subscribe((res) => {
      if (res && res.userId) {
        alert("Password has been change successfully");
        this.route.navigate(["/client-login"]);
      }
    }, _error => {
      alert("Error occured while change password.");
    });
  }

}
