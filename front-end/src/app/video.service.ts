import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  [x: string]: any; 
  

  url: string = 'http://localhost:8080';
  category: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  
  listVideos(): Observable<any> {
    return this.http.get(this.url + "/api/videos/view");
  }

  uploadFile(file: any, category: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('category', category);
    return this.http.post(this.url + "/api/videos/uploadFile", formData);
  }
//admin login
  adminSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/admin/login", body);
  }
  storeAdminUserName(name: string): void {
    localStorage.setItem("adminName", name);
  }
  storeAdminAuthorization(token: string): void {
    localStorage.setItem("admin", token);
  }
  getAdminName(): any {
    const name = localStorage.getItem("adminName");
    return name;
  }
  isAdminLoginPresent(): void {
    if (this.getAdminAuthorization() === null) {
      this.router.navigate(['/admin-login']);
    }
  }
  getAdminAuthorization(): any {
    const token = localStorage.getItem("admin");
    return token; 
  }
  
  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/users/register", body);
  }
  //client login
  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/users/login", body);
  }
//once we logged in that time we are storing client id into token 
storeClientAuthorization(token: string): void {
  localStorage.setItem("token", token);
}

getUserAuthorization(): any {
  const token = localStorage.getItem("token");
  return token; 
}

storeClientUserName(name: string): void {
  localStorage.setItem("userName", name);
}

getClientName(): any {
  const name = localStorage.getItem("userName");
  return name;
}


  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }


  deleteVideo(id :any):Observable<any> {
    //return this.http.delete(this.url + "/api/products/" +id);
    //secondway
    return this.http.delete(`${this.url}/api/videos/${id}`);
  }
  
  getVideoById(id:any):Observable<any> {
    return this.http.get(this.url + "/api/videos/files/"+id);
  }
  
  editVideo(body: any,id:any): Observable<any> {
    return this.http.put(this.url + "/api/videos/"+id, body);
  }
  
  addToWishlist(body: any,vid:any,uid:any):Observable<any>{
    return this.http.post(this.url+"/api/Wishist/"+uid+"/"+vid,body);
  }
  
  getUserById(id:any):Observable<any> {
    return this.http.get(this.url + "/api/users/user/"+id);
  }
  
  wishlist():Observable<any>{
    return this.http.get(this.url+"/api/wishlist/list");
  }
  
  deleteWishlist(id :any):Observable<any> {
    
    return this.http.delete(`${this.url}/api/Wishlist/${id}`);
  }
  
  getCategoryList(): any {
    return this.category;
  }
 
  isUserLoginPresent(): void {
    if (this.getUserAuthorization() === null) {
      this.router.navigate(['/client-login']);
    }
  }
  
  
  forgotPassword(body: any):Observable<any> {
    return this.http.post(this.url + "/api/customers/forgotpassword", body);
  }
  
  updateCustomerInformation(body: any):Observable<any> {
    return this.http.put(this.url + "/api/users/user/"+body?.customerId, body);
  }
  
  changePassword(uid: any,password:any):Observable<any> {
    return this.http.post(this.url + "/api/user/"+uid+"/"+password,{});
  }
  
  getVideoByCategory(category: any): Observable<any> {
    return this.http.get(this.url + "/api/videos/byCategory/" + category);
  }
  
  getAllVideos(offset: any, limit: any):Observable<any>{
    return this.http.get(this.url+"/api/videos/view/" + offset + "/" + limit);
  }
  
}
