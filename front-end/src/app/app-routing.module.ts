import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVideoComponent } from './component/view-video/view-video.component';
import { HomeComponent } from './component/home/home/home.component';
import { AdminLoginPageComponent } from './component/admin/admin-login-page/admin-login-page.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminUploadvideoComponent } from './component/admin/admin-uploadvideo/admin-uploadvideo.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { UserWhishlistComponent } from './component/user/user-whishlist/user-whishlist.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { UserLoginPageComponent } from './component/user/user-login-page/user-login-page.component';
import { UserSignupComponent } from './component/user/user-signup/user-signup.component';
import { ListVideoComponent } from './component/admin/list-video/list-video.component';
import { UserListComponent } from './component/user/user-list/user-list.component';



const routes: Routes = [
  //{
  //   path: 'list',component: ListVideoComponent,
  // },
  // {
  //   path: 'watch/:id',component: ViewVideoComponent,
  // },
  // {
  //   path: 'upload',component: UploadVideoComponent,
  // },
  // { path: 'home', component: HomeComponent },
  
  // { path: 'admin',component: AdminLoginPageComponent },

  // {path:'admin',children:[
  //   {path:'home',component:AdminHomeComponent},
  //   {path: 'upload', component: UploadVideoComponent},
  //    {path:'list',component:ListVideoComponent},
  //    {path:'watch/:id',component:ViewVideoComponent},
  // ]}

  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  // {path: 'change-password', component: ChangePasswordComponent},
  {path:'client-register',component: UserSignupComponent},
  {path:'client-login',component:UserLoginPageComponent},
  {path:'admin-login',component:AdminLoginPageComponent},
  // {path:'watch/:id',component: ViewVideoComponent},

  {path:'user',children:[
    {path:'home',component:UserHomeComponent},
    {path:'wishlist',component:UserWhishlistComponent},
    { path: 'listvideo', component: UserListComponent},
    {path:'watch/:id',component: ViewVideoComponent},
  ]},
  {path:'admin',children:[
    {path:'home',component:AdminHomeComponent},
    {path: 'uploadvideo', component:AdminUploadvideoComponent },
    {path:'listvideo',component:ListVideoComponent},
    {path:'watch/:id',component: ViewVideoComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
