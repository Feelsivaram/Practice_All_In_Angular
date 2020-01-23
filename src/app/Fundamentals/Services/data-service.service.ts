import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private UserDetails: any;

  saveUserDetails(users: any) {
    this.UserDetails = users;
  }

  getUserDetails() {
    return this.UserDetails;
  }

}
