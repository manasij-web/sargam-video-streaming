import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent implements OnInit {
  email: string = "";
  password: string = "";
  customerLoginForm: any = new FormGroup({});

  constructor(
    private router: Router,
    private service: VideoService,
    private fb: FormBuilder
  ) {
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    this.customerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(pattern)]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit(): void {

  }

  signIn(): void {
    const body = {
      "userEmailId": this.customerLoginForm.controls['email'].value,
      "userPassword": this.customerLoginForm.controls['password'].value
    }
    this.service.clientSignIn(body).pipe(take(1)).subscribe((res: any) => {
      console.log("*****", res);
      if (res && res?.userId) {
        this.service.storeClientAuthorization(res?.userId);
        let userName = '';
        if (res?.firstName) {
          userName += res?.firstName;
        }
        if (res?.lastName) {
          userName += ' ' + res?.lastName;
        }
        this.service.storeClientUserName(userName);
        this.router.navigate(['/user/home']);
      } else {
        alert("Something going wrong in login! pl try again");
      }
    }, (err: any) => {
      console.log("Error ", err);
      alert("Something going wrong in login! pl try again");
    })
  }
  routeToNewUser(): void {
    this.router.navigate(["/client-register"]);
  }

  routeToForgotPassword(): void {
    this.router.navigate(["/forgot-password"]);
  }

}
