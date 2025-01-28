import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NASAService {
  private apiURL = 'https://api.nasa.gov/planetary/apod';
  private apiKey = '9YgkUeMw5gUfjVxv7yCxQCGTPOE1Rwk1dWqm1kWh';

  constructor(private http: HttpClient){}

  getImageOfTheDay(): Observable<any> {
    return this.http.get(`${this.apiURL}?api_key=${this.apiKey}`);
  }
}
