import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CustomServiceService {

  serviceProperty: string = "Custom service property."

  constructor() { }

  serviceFunction() {
    return "Custom service function/method."
  }

}

export class CustomServiceClass {
  ServiceClass = "Custom service class for entire components."
}
