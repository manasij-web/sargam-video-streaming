import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {


  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
 
  constructor(
    
    private router: Router,
    private datePipe: DatePipe,
    private service:VideoService

  ) { }

  ngOnInit(): void {
  }

  signup(): void {
    if (this.firstName === '' || this.firstName.length < 3) {
      alert('FirstName must contain atleast 3 characters');
      return;
    }
    if (this.lastName === '' || this.lastName.length < 3) {
      alert('LastName must contain atleast 3 characters');
      return;
    }

   
//alert("sucess")
    const body: any = {
      firstName : this.firstName,
      lastName : this.lastName,
      emailID :this.email,
      password:this.password

    }
    console.log("=======>",body);
    this.service.signUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customerId){
        alert("Registration sucessful");
        this.router.navigate(["/client-login"]);
      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong!!pl try again");
    })

  }

}

