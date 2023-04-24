import { Component, OnInit} from '@angular/core';
import { take } from 'rxjs';
import { VideoService } from 'src/app/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  constructor(
    private router:Router,
    private service: VideoService
  ){}

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
  
    const body: any = {
      firstName : this.firstName,
      lastName : this.lastName,
      userEmailId :this.email,
      userPassword:this.password
    }

    this.service.signUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.userId){
        alert("Registration successful");
        this.router.navigate(["/client-login"]);
      }
    }, (err: any) =>{
      console.log("Error  ",err);
      alert("Something going wrong!!pl try again");
    })
  }
}
