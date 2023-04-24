import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVideoComponent } from './component/view-video/view-video.component';
import { ListVideoComponent } from './component/admin/list-video/list-video.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home/home.component';
import { AdminLoginPageComponent } from './component/admin/admin-login-page/admin-login-page.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AdminUploadvideoComponent } from './component/admin/admin-uploadvideo/admin-uploadvideo.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { UserHeaderComponent } from './component/user/user-header/user-header.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { UserLoginPageComponent } from './component/user/user-login-page/user-login-page.component';
import { UserWhishlistComponent } from './component/user/user-whishlist/user-whishlist.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { UserSignupComponent } from './component/user/user-signup/user-signup.component';
import { UserListComponent } from './component/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewVideoComponent,
    ListVideoComponent,
    HomeComponent,
    AdminLoginPageComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AppHeaderComponent,
    AdminUploadvideoComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserHeaderComponent,
    UserHomeComponent,
    UserLoginPageComponent,
    UserWhishlistComponent,
    ForgotPasswordComponent,
    UserSignupComponent,
    UserListComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    MatButtonToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
